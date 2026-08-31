package com.myorg;

import com.aliyun.ros.cdk.core.*;

import java.util.Arrays;

public class %name.PascalCased%App {
    public static void main(final String[] args) {
        App app = new App();

        new %name.PascalCased%Stack(app, "%name.PascalCased%Stack");

        app.synth();
    }
}
