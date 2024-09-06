"use client"
import {useRouter } from 'next/router'

export default function page() {
  const {query}= useRouter();
  return (
    <div>
        <h1>{query.serviceId}</h1>
    </div>
  )
}
