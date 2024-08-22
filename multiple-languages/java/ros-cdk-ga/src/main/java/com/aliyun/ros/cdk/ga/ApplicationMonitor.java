package com.aliyun.ros.cdk.ga;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GA::ApplicationMonitor</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:21.689Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.ApplicationMonitor")
public class ApplicationMonitor extends com.aliyun.ros.cdk.core.Resource {

    protected ApplicationMonitor(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ApplicationMonitor(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ApplicationMonitor(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.ApplicationMonitorProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ApplicationMonitor(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.ApplicationMonitorProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TaskId: The ID of the origin probing task.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.ApplicationMonitorProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.ApplicationMonitorProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.ApplicationMonitorProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.ApplicationMonitor}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.ApplicationMonitor> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ga.ApplicationMonitorProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.ApplicationMonitorProps.Builder();
        }

        /**
         * Property acceleratorId: The ID of the GA instance on which you want to perform the origin probing task.
         * <p>
         * @return {@code this}
         * @param acceleratorId Property acceleratorId: The ID of the GA instance on which you want to perform the origin probing task. This parameter is required.
         */
        public Builder acceleratorId(final java.lang.String acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }
        /**
         * Property acceleratorId: The ID of the GA instance on which you want to perform the origin probing task.
         * <p>
         * @return {@code this}
         * @param acceleratorId Property acceleratorId: The ID of the GA instance on which you want to perform the origin probing task. This parameter is required.
         */
        public Builder acceleratorId(final com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }

        /**
         * Property address: The URL or IP address that you want to probe.
         * <p>
         * @return {@code this}
         * @param address Property address: The URL or IP address that you want to probe. This parameter is required.
         */
        public Builder address(final java.lang.String address) {
            this.props.address(address);
            return this;
        }
        /**
         * Property address: The URL or IP address that you want to probe.
         * <p>
         * @return {@code this}
         * @param address Property address: The URL or IP address that you want to probe. This parameter is required.
         */
        public Builder address(final com.aliyun.ros.cdk.core.IResolvable address) {
            this.props.address(address);
            return this;
        }

        /**
         * Property listenerId: The ID of the listener on which you want to perform the origin probing task.
         * <p>
         * @return {@code this}
         * @param listenerId Property listenerId: The ID of the listener on which you want to perform the origin probing task. This parameter is required.
         */
        public Builder listenerId(final java.lang.String listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }
        /**
         * Property listenerId: The ID of the listener on which you want to perform the origin probing task.
         * <p>
         * @return {@code this}
         * @param listenerId Property listenerId: The ID of the listener on which you want to perform the origin probing task. This parameter is required.
         */
        public Builder listenerId(final com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }

        /**
         * Property taskName: The name of the origin probing task.
         * <p>
         * The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
         * <p>
         * @return {@code this}
         * @param taskName Property taskName: The name of the origin probing task. This parameter is required.
         */
        public Builder taskName(final java.lang.String taskName) {
            this.props.taskName(taskName);
            return this;
        }
        /**
         * Property taskName: The name of the origin probing task.
         * <p>
         * The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
         * <p>
         * @return {@code this}
         * @param taskName Property taskName: The name of the origin probing task. This parameter is required.
         */
        public Builder taskName(final com.aliyun.ros.cdk.core.IResolvable taskName) {
            this.props.taskName(taskName);
            return this;
        }

        /**
         * Property detectEnable: Specifies whether to enable the automatic diagnostics feature.
         * <p>
         * @return {@code this}
         * @param detectEnable Property detectEnable: Specifies whether to enable the automatic diagnostics feature. This parameter is required.
         */
        public Builder detectEnable(final java.lang.Boolean detectEnable) {
            this.props.detectEnable(detectEnable);
            return this;
        }
        /**
         * Property detectEnable: Specifies whether to enable the automatic diagnostics feature.
         * <p>
         * @return {@code this}
         * @param detectEnable Property detectEnable: Specifies whether to enable the automatic diagnostics feature. This parameter is required.
         */
        public Builder detectEnable(final com.aliyun.ros.cdk.core.IResolvable detectEnable) {
            this.props.detectEnable(detectEnable);
            return this;
        }

        /**
         * Property detectThreshold: The threshold that is used to trigger the automatic diagnostics feature.
         * <p>
         * Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
         * <p>
         * @return {@code this}
         * @param detectThreshold Property detectThreshold: The threshold that is used to trigger the automatic diagnostics feature. This parameter is required.
         */
        public Builder detectThreshold(final java.lang.Number detectThreshold) {
            this.props.detectThreshold(detectThreshold);
            return this;
        }
        /**
         * Property detectThreshold: The threshold that is used to trigger the automatic diagnostics feature.
         * <p>
         * Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
         * <p>
         * @return {@code this}
         * @param detectThreshold Property detectThreshold: The threshold that is used to trigger the automatic diagnostics feature. This parameter is required.
         */
        public Builder detectThreshold(final com.aliyun.ros.cdk.core.IResolvable detectThreshold) {
            this.props.detectThreshold(detectThreshold);
            return this;
        }

        /**
         * Property detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered.
         * <p>
         * Valid values: 1 to 20. Default value: 1.
         * <p>
         * @return {@code this}
         * @param detectTimes Property detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered. This parameter is required.
         */
        public Builder detectTimes(final java.lang.Number detectTimes) {
            this.props.detectTimes(detectTimes);
            return this;
        }
        /**
         * Property detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered.
         * <p>
         * Valid values: 1 to 20. Default value: 1.
         * <p>
         * @return {@code this}
         * @param detectTimes Property detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered. This parameter is required.
         */
        public Builder detectTimes(final com.aliyun.ros.cdk.core.IResolvable detectTimes) {
            this.props.detectTimes(detectTimes);
            return this;
        }

        /**
         * Property optionsJson: The extended options of the listener protocol that is used by the origin probing task.
         * <p>
         * The options vary based on the listener protocol.
         * <p>
         * @return {@code this}
         * @param optionsJson Property optionsJson: The extended options of the listener protocol that is used by the origin probing task. This parameter is required.
         */
        public Builder optionsJson(final com.aliyun.ros.cdk.core.IResolvable optionsJson) {
            this.props.optionsJson(optionsJson);
            return this;
        }
        /**
         * Property optionsJson: The extended options of the listener protocol that is used by the origin probing task.
         * <p>
         * The options vary based on the listener protocol.
         * <p>
         * @return {@code this}
         * @param optionsJson Property optionsJson: The extended options of the listener protocol that is used by the origin probing task. This parameter is required.
         */
        public Builder optionsJson(final java.util.Map<java.lang.String, ? extends java.lang.Object> optionsJson) {
            this.props.optionsJson(optionsJson);
            return this;
        }

        /**
         * Property silenceTime: The silence period of the automatic diagnostics feature.
         * <p>
         * This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
         * <p>
         * @return {@code this}
         * @param silenceTime Property silenceTime: The silence period of the automatic diagnostics feature. This parameter is required.
         */
        public Builder silenceTime(final java.lang.Number silenceTime) {
            this.props.silenceTime(silenceTime);
            return this;
        }
        /**
         * Property silenceTime: The silence period of the automatic diagnostics feature.
         * <p>
         * This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
         * <p>
         * @return {@code this}
         * @param silenceTime Property silenceTime: The silence period of the automatic diagnostics feature. This parameter is required.
         */
        public Builder silenceTime(final com.aliyun.ros.cdk.core.IResolvable silenceTime) {
            this.props.silenceTime(silenceTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.ApplicationMonitor}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.ApplicationMonitor build() {
            return new com.aliyun.ros.cdk.ga.ApplicationMonitor(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
