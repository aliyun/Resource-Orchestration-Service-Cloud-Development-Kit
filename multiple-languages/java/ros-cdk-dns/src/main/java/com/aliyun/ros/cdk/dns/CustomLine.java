package com.aliyun.ros.cdk.dns;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DNS::CustomLine</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:23.925Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.CustomLine")
public class CustomLine extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dns.ICustomLine {

    protected CustomLine(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CustomLine(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public CustomLine(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.CustomLineProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public CustomLine(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.CustomLineProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute LineId: The ID of the custom line.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLineId() {
        return software.amazon.jsii.Kernel.get(this, "attrLineId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.CustomLineProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dns.CustomLineProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.CustomLine}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.CustomLine> {
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
        private final com.aliyun.ros.cdk.dns.CustomLineProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dns.CustomLineProps.Builder();
        }

        /**
         * Property domainName: The domain name associated with the custom line.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: The domain name associated with the custom line. This parameter is required.
         */
        public Builder domainName(final java.lang.String domainName) {
            this.props.domainName(domainName);
            return this;
        }
        /**
         * Property domainName: The domain name associated with the custom line.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: The domain name associated with the custom line. This parameter is required.
         */
        public Builder domainName(final com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.props.domainName(domainName);
            return this;
        }

        /**
         * Property ipSegment: The list of IP segments for the custom line.
         * <p>
         * @return {@code this}
         * @param ipSegment Property ipSegment: The list of IP segments for the custom line. This parameter is required.
         */
        public Builder ipSegment(final com.aliyun.ros.cdk.core.IResolvable ipSegment) {
            this.props.ipSegment(ipSegment);
            return this;
        }
        /**
         * Property ipSegment: The list of IP segments for the custom line.
         * <p>
         * @return {@code this}
         * @param ipSegment Property ipSegment: The list of IP segments for the custom line. This parameter is required.
         */
        public Builder ipSegment(final java.util.List<? extends java.lang.Object> ipSegment) {
            this.props.ipSegment(ipSegment);
            return this;
        }

        /**
         * Property lineName: The name of the custom line.
         * <p>
         * @return {@code this}
         * @param lineName Property lineName: The name of the custom line. This parameter is required.
         */
        public Builder lineName(final java.lang.String lineName) {
            this.props.lineName(lineName);
            return this;
        }
        /**
         * Property lineName: The name of the custom line.
         * <p>
         * @return {@code this}
         * @param lineName Property lineName: The name of the custom line. This parameter is required.
         */
        public Builder lineName(final com.aliyun.ros.cdk.core.IResolvable lineName) {
            this.props.lineName(lineName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.CustomLine}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.CustomLine build() {
            return new com.aliyun.ros.cdk.dns.CustomLine(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
