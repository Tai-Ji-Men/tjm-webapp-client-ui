import {useEffect, useState} from "react";

const BASE = '/api/content';

export async function getPageContent(pageId) {
  const res = await fetch(`${BASE}/${pageId}`);
  if (!res.ok) {
    throw new Error(`Failed to load content for "${pageId}"`);
  }
  return res.json();
}

// http://localhost:8080/tjm/api/v1/test

export async function getPageContentTest(pageId) {
  const res = await fetch("http://localhost:8080/tjm/api/v1/test");
  console.log("Test: " + res);
  if (!res.ok) {
    throw new Error(`Failed to load content for "${pageId}"`);
  }
  return res.json();
}


/**
 * Fetch the recommendations/testimonials JSON.
 */
export async function getTestimonials() {
  const res = await fetch('/api/content/recommendations');
  if (!res.ok) throw new Error('Failed to load testimonials');
  const { testimonials } = await res.json();
  return testimonials;
}
