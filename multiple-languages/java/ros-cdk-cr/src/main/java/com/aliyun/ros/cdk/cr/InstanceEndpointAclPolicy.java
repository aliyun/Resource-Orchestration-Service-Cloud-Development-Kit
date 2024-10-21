package com.aliyun.ros.cdk.cr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CR::InstanceEndpointAclPolicy</code>, which is used to create a whitelist policy for the public endpoint of an instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:27.914Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.InstanceEndpointAclPolicy")
public class InstanceEndpointAclPolicy extends com.aliyun.ros.cdk.core.Resource {

    protected InstanceEndpointAclPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected InstanceEndpointAclPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public InstanceEndpointAclPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.InstanceEndpointAclPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public InstanceEndpointAclPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.InstanceEndpointAclPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Entry: The IP address range that is allowed to access the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEntry() {
        return software.amazon.jsii.Kernel.get(this, "attrEntry", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.InstanceEndpointAclPolicyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cr.InstanceEndpointAclPolicyProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.InstanceEndpointAclPolicyProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cr.InstanceEndpointAclPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cr.InstanceEndpointAclPolicy> {
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
        private final com.aliyun.ros.cdk.cr.InstanceEndpointAclPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cr.InstanceEndpointAclPolicyProps.Builder();
        }

        /**
         * Property entry: The IP address range that is allowed to access the instance.
         * <p>
         * @return {@code this}
         * @param entry Property entry: The IP address range that is allowed to access the instance. This parameter is required.
         */
        public Builder entry(final java.lang.String entry) {
            this.props.entry(entry);
            return this;
        }
        /**
         * Property entry: The IP address range that is allowed to access the instance.
         * <p>
         * @return {@code this}
         * @param entry Property entry: The IP address range that is allowed to access the instance. This parameter is required.
         */
        public Builder entry(final com.aliyun.ros.cdk.core.IResolvable entry) {
            this.props.entry(entry);
            return this;
        }

        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property comment: The description of the entry.
         * <p>
         * @return {@code this}
         * @param comment Property comment: The description of the entry. This parameter is required.
         */
        public Builder comment(final java.lang.String comment) {
            this.props.comment(comment);
            return this;
        }
        /**
         * Property comment: The description of the entry.
         * <p>
         * @return {@code this}
         * @param comment Property comment: The description of the entry. This parameter is required.
         */
        public Builder comment(final com.aliyun.ros.cdk.core.IResolvable comment) {
            this.props.comment(comment);
            return this;
        }

        /**
         * Property endpointType: The type of the endpoint.
         * <p>
         * @return {@code this}
         * @param endpointType Property endpointType: The type of the endpoint. This parameter is required.
         */
        public Builder endpointType(final java.lang.String endpointType) {
            this.props.endpointType(endpointType);
            return this;
        }
        /**
         * Property endpointType: The type of the endpoint.
         * <p>
         * @return {@code this}
         * @param endpointType Property endpointType: The type of the endpoint. This parameter is required.
         */
        public Builder endpointType(final com.aliyun.ros.cdk.core.IResolvable endpointType) {
            this.props.endpointType(endpointType);
            return this;
        }

        /**
         * Property moduleName: The name of the module in the instance for which a whitelist is configured.
         * <p>
         * Valid
         * values: Registry and Chart.
         * <p>
         * @return {@code this}
         * @param moduleName Property moduleName: The name of the module in the instance for which a whitelist is configured. This parameter is required.
         */
        public Builder moduleName(final java.lang.String moduleName) {
            this.props.moduleName(moduleName);
            return this;
        }
        /**
         * Property moduleName: The name of the module in the instance for which a whitelist is configured.
         * <p>
         * Valid
         * values: Registry and Chart.
         * <p>
         * @return {@code this}
         * @param moduleName Property moduleName: The name of the module in the instance for which a whitelist is configured. This parameter is required.
         */
        public Builder moduleName(final com.aliyun.ros.cdk.core.IResolvable moduleName) {
            this.props.moduleName(moduleName);
            return this;
        }

        /**
         * Property regionId: Region ID of instance.
         * <p>
         * Default is current region.
         * <p>
         * @return {@code this}
         * @param regionId Property regionId: Region ID of instance. This parameter is required.
         */
        public Builder regionId(final java.lang.String regionId) {
            this.props.regionId(regionId);
            return this;
        }
        /**
         * Property regionId: Region ID of instance.
         * <p>
         * Default is current region.
         * <p>
         * @return {@code this}
         * @param regionId Property regionId: Region ID of instance. This parameter is required.
         */
        public Builder regionId(final com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.props.regionId(regionId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cr.InstanceEndpointAclPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.cr.InstanceEndpointAclPolicy build() {
            return new com.aliyun.ros.cdk.cr.InstanceEndpointAclPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
