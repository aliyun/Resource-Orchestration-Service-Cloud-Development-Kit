package com.aliyun.ros.cdk.waf;

/**
 * A ROS resource type:  <code>ALIYUN::WAF::LogServiceEnable</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:04.216Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.LogServiceEnable")
public class LogServiceEnable extends com.aliyun.ros.cdk.core.Resource {

    protected LogServiceEnable(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LogServiceEnable(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::WAF::LogServiceEnable</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public LogServiceEnable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.LogServiceEnableProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::WAF::LogServiceEnable</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public LogServiceEnable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.LogServiceEnableProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Domain: The domain name that is added to WAF.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: The ID of the WAF instance.
     * <p>
     * You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.waf.LogServiceEnable}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.waf.LogServiceEnable> {
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
        private final com.aliyun.ros.cdk.waf.LogServiceEnableProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.waf.LogServiceEnableProps.Builder();
        }

        /**
         * Property domain: The domain name that is added to WAF.
         * <p>
         * @return {@code this}
         * @param domain Property domain: The domain name that is added to WAF. This parameter is required.
         */
        public Builder domain(final java.lang.String domain) {
            this.props.domain(domain);
            return this;
        }
        /**
         * Property domain: The domain name that is added to WAF.
         * <p>
         * @return {@code this}
         * @param domain Property domain: The domain name that is added to WAF. This parameter is required.
         */
        public Builder domain(final com.aliyun.ros.cdk.core.IResolvable domain) {
            this.props.domain(domain);
            return this;
        }

        /**
         * Property instanceId: The ID of the WAF instance.
         * <p>
         * You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the WAF instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the WAF instance.
         * <p>
         * You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the WAF instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.waf.LogServiceEnable}.
         */
        @Override
        public com.aliyun.ros.cdk.waf.LogServiceEnable build() {
            return new com.aliyun.ros.cdk.waf.LogServiceEnable(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
