if (statusBarOverlaysWebView) {
       self.webView.frame = bounds;       
} else {

        CGRect statusBarFrame = [UIApplication sharedApplication].statusBarFrame;
        CGRect frame = self.webView.frame;
        frame.origin.y = statusBarFrame.size.height;
        frame.size.height -= statusBarFrame.size.height;  
        self.webView.frame = frame;        
}