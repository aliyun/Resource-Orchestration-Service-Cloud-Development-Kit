package com.aliyun.ros.cdk.dts;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DTS::JobMonitorRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:29:50.784Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.JobMonitorRule")
public class JobMonitorRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dts.IJobMonitorRule {

    protected JobMonitorRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected JobMonitorRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public JobMonitorRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.JobMonitorRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public JobMonitorRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.JobMonitorRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DelayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDelayRuleTime() {
        return software.amazon.jsii.Kernel.get(this, "attrDelayRuleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrDtsJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Period: The statistical period of the incremental verification task.
     * <p>
     * Unit: minutes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Phones: The alarm is triggered after notification of the contact phone number, A plurality of phone numbers between them with a comma (,) to separate.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPhones() {
        return software.amazon.jsii.Kernel.get(this, "attrPhones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute State: Whether to enable monitoring rules, return value:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
        return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Times: The number of cycles of the incremental verification task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimes() {
        return software.amazon.jsii.Kernel.get(this, "attrTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Type: Monitoring rules of type, the return value:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.JobMonitorRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.JobMonitorRuleProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dts.JobMonitorRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dts.JobMonitorRule> {
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
        private final com.aliyun.ros.cdk.dts.JobMonitorRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dts.JobMonitorRuleProps.Builder();
        }

        /**
         * Property dtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.
         * <p>
         * @return {@code this}
         * @param dtsJobId Property dtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get. This parameter is required.
         */
        public Builder dtsJobId(final java.lang.String dtsJobId) {
            this.props.dtsJobId(dtsJobId);
            return this;
        }
        /**
         * Property dtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.
         * <p>
         * @return {@code this}
         * @param dtsJobId Property dtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get. This parameter is required.
         */
        public Builder dtsJobId(final com.aliyun.ros.cdk.core.IResolvable dtsJobId) {
            this.props.dtsJobId(dtsJobId);
            return this;
        }

        /**
         * Property type: Monitoring rules of type, the return value: - <strong>delay</strong>: delay alarm.
         * <p>
         * <ul>
         * <li><strong>error</strong>: abnormal alarm.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param type Property type: Monitoring rules of type, the return value: - <strong>delay</strong>: delay alarm. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: Monitoring rules of type, the return value: - <strong>delay</strong>: delay alarm.
         * <p>
         * <ul>
         * <li><strong>error</strong>: abnormal alarm.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param type Property type: Monitoring rules of type, the return value: - <strong>delay</strong>: delay alarm. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property delayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
         * <p>
         * @return {@code this}
         * @param delayRuleTime Property delayRuleTime: Trigger delay alarm threshold, which is measured in seconds. This parameter is required.
         */
        public Builder delayRuleTime(final java.lang.Number delayRuleTime) {
            this.props.delayRuleTime(delayRuleTime);
            return this;
        }
        /**
         * Property delayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
         * <p>
         * @return {@code this}
         * @param delayRuleTime Property delayRuleTime: Trigger delay alarm threshold, which is measured in seconds. This parameter is required.
         */
        public Builder delayRuleTime(final com.aliyun.ros.cdk.core.IResolvable delayRuleTime) {
            this.props.delayRuleTime(delayRuleTime);
            return this;
        }

        /**
         * Property period: The statistical period of the incremental verification task.
         * <p>
         * Unit: minutes.
         * <p>
         * <blockquote>
         * <p>
         * currently supported values are 1 minute, 3 minutes, 5 minutes and 30 minutes.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param period Property period: The statistical period of the incremental verification task. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The statistical period of the incremental verification task.
         * <p>
         * Unit: minutes.
         * <p>
         * <blockquote>
         * <p>
         * currently supported values are 1 minute, 3 minutes, 5 minutes and 30 minutes.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param period Property period: The statistical period of the incremental verification task. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property phones: The alarm is triggered after notification of the contact phone number.
         * <p>
         * @return {@code this}
         * @param phones Property phones: The alarm is triggered after notification of the contact phone number. This parameter is required.
         */
        public Builder phones(final java.util.List<? extends java.lang.Object> phones) {
            this.props.phones(phones);
            return this;
        }
        /**
         * Property phones: The alarm is triggered after notification of the contact phone number.
         * <p>
         * @return {@code this}
         * @param phones Property phones: The alarm is triggered after notification of the contact phone number. This parameter is required.
         */
        public Builder phones(final com.aliyun.ros.cdk.core.IResolvable phones) {
            this.props.phones(phones);
            return this;
        }

        /**
         * Property state: Whether to enable monitoring rules, return value: - <strong>Y</strong>: enable.
         * <p>
         * <ul>
         * <li><strong>N</strong>: Inactive.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param state Property state: Whether to enable monitoring rules, return value: - <strong>Y</strong>: enable. This parameter is required.
         */
        public Builder state(final java.lang.String state) {
            this.props.state(state);
            return this;
        }
        /**
         * Property state: Whether to enable monitoring rules, return value: - <strong>Y</strong>: enable.
         * <p>
         * <ul>
         * <li><strong>N</strong>: Inactive.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param state Property state: Whether to enable monitoring rules, return value: - <strong>Y</strong>: enable. This parameter is required.
         */
        public Builder state(final com.aliyun.ros.cdk.core.IResolvable state) {
            this.props.state(state);
            return this;
        }

        /**
         * Property times: The number of cycles of the incremental verification task.
         * <p>
         * @return {@code this}
         * @param times Property times: The number of cycles of the incremental verification task. This parameter is required.
         */
        public Builder times(final java.lang.Number times) {
            this.props.times(times);
            return this;
        }
        /**
         * Property times: The number of cycles of the incremental verification task.
         * <p>
         * @return {@code this}
         * @param times Property times: The number of cycles of the incremental verification task. This parameter is required.
         */
        public Builder times(final com.aliyun.ros.cdk.core.IResolvable times) {
            this.props.times(times);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dts.JobMonitorRule}.
         */
        @Override
        public com.aliyun.ros.cdk.dts.JobMonitorRule build() {
            return new com.aliyun.ros.cdk.dts.JobMonitorRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
