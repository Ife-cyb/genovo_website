import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send auto-reply email

    console.log("Contact form submission:", {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate different response scenarios for demo
    const random = Math.random()
    if (random < 0.1) {
      // 10% chance of server error for demo
      throw new Error("Simulated server error")
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We'll get back to you within 24-48 hours.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error. Please try again later." }, { status: 500 })
  }
}
