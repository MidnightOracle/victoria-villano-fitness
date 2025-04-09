# Download placeholder images from unsplash.it
$images = @{
    "hero-meditation.jpg" = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000"
    "yoga-fitness.jpg" = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800"
    "aqua-fitness.jpg" = "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=800"
    "dance-fit.jpg" = "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?q=80&w=800"
    "gallery-1.jpg" = "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200"
    "blog-1.jpg" = "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=800"
    "blog-2.jpg" = "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=800"
    "blog-3.jpg" = "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800"
    "victoria-profile.jpg" = "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800"
}

# Create directory if it doesn't exist
$outputPath = "public/images"
if (-not (Test-Path $outputPath)) {
    New-Item -ItemType Directory -Path $outputPath
}

# Download each image
foreach ($image in $images.GetEnumerator()) {
    $outputFile = Join-Path $outputPath $image.Key
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputFile
}

Write-Host "All images downloaded successfully!" 