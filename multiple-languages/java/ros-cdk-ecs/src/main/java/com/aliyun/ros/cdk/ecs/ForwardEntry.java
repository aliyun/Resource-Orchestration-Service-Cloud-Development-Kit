package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::ForwardEntry</code>, which is used to configure the Destination Network Address Translation (DNAT) table of a Network Address Translation (NAT) gateway.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:04.594Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.ForwardEntry")
public class ForwardEntry extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.IForwardEntry {

    protected ForwardEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ForwardEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ForwardEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.ForwardEntryProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ForwardEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.ForwardEntryProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ForwardEntryId: The id of created forward entry.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrForwardEntryId() {
        return software.amazon.jsii.Kernel.get(this, "attrForwardEntryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.ForwardEntryProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.ForwardEntryProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.ForwardEntry}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.ForwardEntry> {
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
        private final com.aliyun.ros.cdk.ecs.ForwardEntryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.ForwardEntryProps.Builder();
        }

        /**
         * Property externalIp: Source IP, must belongs to bandwidth package internet IP.
         * <p>
         * @return {@code this}
         * @param externalIp Property externalIp: Source IP, must belongs to bandwidth package internet IP. This parameter is required.
         */
        public Builder externalIp(final java.lang.String externalIp) {
            this.props.externalIp(externalIp);
            return this;
        }
        /**
         * Property externalIp: Source IP, must belongs to bandwidth package internet IP.
         * <p>
         * @return {@code this}
         * @param externalIp Property externalIp: Source IP, must belongs to bandwidth package internet IP. This parameter is required.
         */
        public Builder externalIp(final com.aliyun.ros.cdk.core.IResolvable externalIp) {
            this.props.externalIp(externalIp);
            return this;
        }

        /**
         * Property externalPort: Source port, now support [1-65535]|Any|x/y.
         * <p>
         * @return {@code this}
         * @param externalPort Property externalPort: Source port, now support [1-65535]|Any|x/y. This parameter is required.
         */
        public Builder externalPort(final java.lang.String externalPort) {
            this.props.externalPort(externalPort);
            return this;
        }
        /**
         * Property externalPort: Source port, now support [1-65535]|Any|x/y.
         * <p>
         * @return {@code this}
         * @param externalPort Property externalPort: Source port, now support [1-65535]|Any|x/y. This parameter is required.
         */
        public Builder externalPort(final com.aliyun.ros.cdk.core.IResolvable externalPort) {
            this.props.externalPort(externalPort);
            return this;
        }

        /**
         * Property forwardTableId: Create forward entry in specified forward table.
         * <p>
         * @return {@code this}
         * @param forwardTableId Property forwardTableId: Create forward entry in specified forward table. This parameter is required.
         */
        public Builder forwardTableId(final java.lang.String forwardTableId) {
            this.props.forwardTableId(forwardTableId);
            return this;
        }
        /**
         * Property forwardTableId: Create forward entry in specified forward table.
         * <p>
         * @return {@code this}
         * @param forwardTableId Property forwardTableId: Create forward entry in specified forward table. This parameter is required.
         */
        public Builder forwardTableId(final com.aliyun.ros.cdk.core.IResolvable forwardTableId) {
            this.props.forwardTableId(forwardTableId);
            return this;
        }

        /**
         * Property internalIp: Destination IP, must belong to VPC private IP.
         * <p>
         * @return {@code this}
         * @param internalIp Property internalIp: Destination IP, must belong to VPC private IP. This parameter is required.
         */
        public Builder internalIp(final java.lang.String internalIp) {
            this.props.internalIp(internalIp);
            return this;
        }
        /**
         * Property internalIp: Destination IP, must belong to VPC private IP.
         * <p>
         * @return {@code this}
         * @param internalIp Property internalIp: Destination IP, must belong to VPC private IP. This parameter is required.
         */
        public Builder internalIp(final com.aliyun.ros.cdk.core.IResolvable internalIp) {
            this.props.internalIp(internalIp);
            return this;
        }

        /**
         * Property internalPort: Destination port, now support [1-65535]|Any|x/y.
         * <p>
         * @return {@code this}
         * @param internalPort Property internalPort: Destination port, now support [1-65535]|Any|x/y. This parameter is required.
         */
        public Builder internalPort(final java.lang.String internalPort) {
            this.props.internalPort(internalPort);
            return this;
        }
        /**
         * Property internalPort: Destination port, now support [1-65535]|Any|x/y.
         * <p>
         * @return {@code this}
         * @param internalPort Property internalPort: Destination port, now support [1-65535]|Any|x/y. This parameter is required.
         */
        public Builder internalPort(final com.aliyun.ros.cdk.core.IResolvable internalPort) {
            this.props.internalPort(internalPort);
            return this;
        }

        /**
         * Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'.
         * <p>
         * @return {@code this}
         * @param ipProtocol Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'. This parameter is required.
         */
        public Builder ipProtocol(final java.lang.String ipProtocol) {
            this.props.ipProtocol(ipProtocol);
            return this;
        }
        /**
         * Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'.
         * <p>
         * @return {@code this}
         * @param ipProtocol Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'. This parameter is required.
         */
        public Builder ipProtocol(final com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
            this.props.ipProtocol(ipProtocol);
            return this;
        }

        /**
         * Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
         * <p>
         * @return {@code this}
         * @param forwardEntryName Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://. This parameter is required.
         */
        public Builder forwardEntryName(final java.lang.String forwardEntryName) {
            this.props.forwardEntryName(forwardEntryName);
            return this;
        }
        /**
         * Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
         * <p>
         * @return {@code this}
         * @param forwardEntryName Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://. This parameter is required.
         */
        public Builder forwardEntryName(final com.aliyun.ros.cdk.core.IResolvable forwardEntryName) {
            this.props.forwardEntryName(forwardEntryName);
            return this;
        }

        /**
         * Property portBreak: Specifies whether to remove limits on the port range.
         * <p>
         * @return {@code this}
         * @param portBreak Property portBreak: Specifies whether to remove limits on the port range. This parameter is required.
         */
        public Builder portBreak(final java.lang.Boolean portBreak) {
            this.props.portBreak(portBreak);
            return this;
        }
        /**
         * Property portBreak: Specifies whether to remove limits on the port range.
         * <p>
         * @return {@code this}
         * @param portBreak Property portBreak: Specifies whether to remove limits on the port range. This parameter is required.
         */
        public Builder portBreak(final com.aliyun.ros.cdk.core.IResolvable portBreak) {
            this.props.portBreak(portBreak);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.ForwardEntry}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.ForwardEntry build() {
            return new com.aliyun.ros.cdk.ecs.ForwardEntry(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
