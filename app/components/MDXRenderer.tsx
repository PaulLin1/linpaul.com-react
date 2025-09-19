"use client";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

interface MDXRendererProps {
  source: MDXRemoteSerializeResult;
}

// Custom paragraph component that splits content into separate highlighted lines
const Paragraph = (props: any) => {
  const content = props.children;
  
  if (typeof content === 'string') {
    // Split by sentences (periods followed by space) or newlines
    const lines = content
      .split(/(?<=\.)\s+|(?<=!)\s+|(?<=\?)\s+|\n/) // Split on sentence endings or newlines
      .map(line => line.trim())
      .filter(line => line.length > 0);
    
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '0.5rem',
        margin: "0 0 1rem 0"
      }}>
        {lines.map((line, idx) => (
          <span
            key={idx}
            style={{
              backgroundColor: 'white',
              display: 'inline',  // This is the key - same as your links
              padding: '0 0.25rem',  // Same padding as your links
              fontSize: '1.25rem'  // Same font size as your links
            }}
          >
            {line}
          </span>
        ))}
      </div>
    );
  }
  
  // For single line content
  return (
    <div style={{ margin: "0 0 1rem 0" }}>
      <span style={{
        backgroundColor: 'white',
        display: 'inline',
        padding: '0 0.25rem',
        fontSize: '1.25rem'
      }}>
        {content}
      </span>
    </div>
  );
};

export default function MDXRenderer({ source }: MDXRendererProps) {
  return (
    <div>
      <MDXRemote {...source} components={{ p: Paragraph }} />
    </div>
  );
}