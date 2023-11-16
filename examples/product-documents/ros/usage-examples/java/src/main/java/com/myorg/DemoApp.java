package com.myorg;

import com.aliyun.ros.cdk.core.*;

import java.util.Arrays;

public class DemoApp {
    public static void main(final String[] args) {
        App app = new App();

        new DemoStack(app, "DemoStack");

        app.synth();
    }
}
