document.querySelector('.analyze-video').addEventListener('click', () => {
    const videoUrl = document.getElementById('video-url').value;
    const videoFile = document.getElementById('video-file').files[0];
    const outputType = document.getElementById('output-type').value;

    if (videoUrl && videoFile) {
        alert('Please provide either a video URL or upload a video file, not both.');
        return;
    }

    if (!videoUrl && !videoFile) {
        alert('Please provide a video URL or upload a video file.');
        return;
    }

    let message = `Output Type: ${outputType}\n`;

    if (videoUrl) {
        message += `Video URL: ${videoUrl}`;
    } else if (videoFile) {
        message += `Video File: ${videoFile.name}`;
    }

    alert(message);

    // Here you can add the functionality to send the data to the server for analysis
});
