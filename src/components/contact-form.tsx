'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { site } from '@/lib/site'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  role: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  service: z.string().min(1, 'Please select a service'),
  siteAddress: z.string().min(5, 'Please provide site address or GPS coordinates'),
  area: z.string().optional(),
  deadline: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  fileUrl: z.string().url().optional().or(z.literal('')),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Get a Quote</CardTitle>
        <CardDescription>
          Fill out the form below and we&apos;ll get back to you within 24 hours
        </CardDescription>      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-2">
              Quote Request Received!
            </h3>
            <p className="text-slate-600">
              We&apos;ll review your request and get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input id="name" {...register('name')} />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" {...register('company')} />
              </div>

              <div>
                <Label htmlFor="role">Role</Label>
                <Input id="role" {...register('role')} placeholder="e.g., Farm Owner, Project Manager" />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" {...register('email')} />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" {...register('phone')} placeholder="+91-XXXXXXXXXX" />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="service">Service Needed *</Label>
                <select
                  id="service"
                  {...register('service')}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select a service</option>
                  <option value="mapping">Aerial Mapping & Survey</option>
                  <option value="inspections">Drone Inspections</option>
                  <option value="agribot">Agribot Spraying</option>
                  <option value="solar">Solar Panel Cleaning</option>
                  <option value="realestate">Real Estate Photography</option>
                  <option value="events">Event Coverage</option>
                </select>
                {errors.service && (
                  <p className="text-sm text-red-500 mt-1">{errors.service.message}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="siteAddress">Site Address / GPS Coordinates *</Label>
              <Input
                id="siteAddress"
                {...register('siteAddress')}
                placeholder="Address or GPS coordinates"
              />
              {errors.siteAddress && (
                <p className="text-sm text-red-500 mt-1">{errors.siteAddress.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="area">Area / Capacity</Label>
                <Input
                  id="area"
                  {...register('area')}
                  placeholder="e.g., 50 acres, 100MW solar plant"
                />
              </div>

              <div>
                <Label htmlFor="deadline">Deadline</Label>
                <Input id="deadline" type="date" {...register('deadline')} />
              </div>
            </div>

            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                {...register('message')}
                rows={4}
                placeholder="Tell us about your project requirements..."
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="fileUrl">File URL (optional)</Label>
              <Input
                id="fileUrl"
                {...register('fileUrl')}
                placeholder="Link to site map, photos, or documents"
              />
              {errors.fileUrl && (
                <p className="text-sm text-red-500 mt-1">{errors.fileUrl.message}</p>
              )}
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Quote Request'
              )}
            </Button>

            <div className="text-center text-sm text-slate-600">
              Or email us directly at{' '}
              <a href={`mailto:${site.email}`} className="text-brand-600 hover:underline">
                {site.email}
              </a>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
