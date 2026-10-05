# veyra

> Understand long educational videos without watching every minute.

veyra is an AI-powered tool that breaks long YouTube videos into focused 5-minute sections and helps you understand what each part is about.

Instead of going through an entire video to find the information you need, veyra gives you a structured breakdown of the video.

## What it does

Paste a YouTube video URL and veyra:

1. Fetches the video transcript.
2. Splits the transcript into 5-minute sections.
3. Uses **Gemma** to analyze each section.
4. Generates:
   - Topic
   - Summary
   - Key points
   - Concepts
   - Useful resources

The goal is not to replace the original video, but to make long videos easier to explore.

## How it works

```text
YouTube URL
     ↓
Transcript
     ↓
5-minute sections
     ↓
Gemma
     ↓
Structured results