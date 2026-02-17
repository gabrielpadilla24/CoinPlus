"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Wraps a table element in a responsive, horizontally scrollable container and applies base table styling.
 *
 * @param className - Additional CSS classes to merge with the component's default table classes
 * @returns The rendered table element wrapped in a div that enables horizontal scrolling
 */
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

/**
 * Renders a styled table header (<thead>) with a data-slot attribute for integration.
 *
 * @returns The `<thead>` element with default header styling and any provided props applied.
 */
function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

/**
 * Renders a `tbody` element with consistent styling and a `data-slot="table-body"` attribute for integration.
 *
 * The component ensures the last table row has no bottom border and merges any provided `className` with the default styles.
 *
 * @param className - Additional CSS class names to merge with the component's default styles
 * @returns The rendered `tbody` element
 */
function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

/**
 * Renders a table footer element with default footer styling and a `data-slot` attribute for integration.
 *
 * @param className - Additional CSS classes to merge with the component's default footer classes
 * @returns The rendered table footer element with `data-slot="table-footer"` and merged classes
 */
function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a table row with consistent styling and a `data-slot="table-row"` attribute.
 *
 * @returns A `tr` element with base row styles, merged `className`, and all other props forwarded.
 */
function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a styled table header cell (`th`) with the `data-slot="table-head"` attribute.
 *
 * Applies default typography, spacing, alignment, and checkbox-alignment rules; accepts and merges a custom `className` and forwards other native `th` props.
 *
 * @returns A `th` React element with default table head styling and `data-slot="table-head"`.
 */
function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

/**
 * Render a table cell element with standardized padding, alignment, whitespace handling, and slot metadata.
 *
 * @param className - Additional CSS classes to merge with the component's default classes
 * @returns The rendered `td` element with `data-slot="table-cell"` and combined class names
 */
function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a table caption with consistent styling and a slot attribute.
 *
 * @returns The rendered `caption` element with base typography classes and `data-slot="table-caption"`.
 */
function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}