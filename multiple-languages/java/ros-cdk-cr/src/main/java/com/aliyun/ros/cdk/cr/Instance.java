package com.aliyun.ros.cdk.cr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CR::Instance</code>, which is used to create a Container Registry Enterprise Edition instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:05.298Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: The first ID of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceName: InstanceName.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceSpecification: InstanceSpecification.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceSpecification() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceSpecification", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ModifiedTime: Last modification time.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrModifiedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cr.InstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.InstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cr.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cr.Instance> {
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
        private final com.aliyun.ros.cdk.cr.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cr.InstanceProps.Builder();
        }

        /**
         * Property imageScanner: Security scan engine.
         * <p>
         * @return {@code this}
         * @param imageScanner Property imageScanner: Security scan engine. This parameter is required.
         */
        public Builder imageScanner(final java.lang.String imageScanner) {
            this.props.imageScanner(imageScanner);
            return this;
        }
        /**
         * Property imageScanner: Security scan engine.
         * <p>
         * @return {@code this}
         * @param imageScanner Property imageScanner: Security scan engine. This parameter is required.
         */
        public Builder imageScanner(final com.aliyun.ros.cdk.core.IResolvable imageScanner) {
            this.props.imageScanner(imageScanner);
            return this;
        }

        /**
         * Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last). This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last). This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition.
         * <p>
         * Valid values:
         * Basic: Basic instance
         * Standard: Standard instance
         * Advanced: Advanced Edition Instance.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition.
         * <p>
         * Valid values:
         * Basic: Basic instance
         * Standard: Standard instance
         * Advanced: Advanced Edition Instance.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property period: Prepaid cycle.
         * <p>
         * The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid cycle. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: Prepaid cycle.
         * <p>
         * The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid cycle. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property instanceStorageName: Custom OSS Bucket name.
         * <p>
         * @return {@code this}
         * @param instanceStorageName Property instanceStorageName: Custom OSS Bucket name. This parameter is required.
         */
        public Builder instanceStorageName(final java.lang.String instanceStorageName) {
            this.props.instanceStorageName(instanceStorageName);
            return this;
        }
        /**
         * Property instanceStorageName: Custom OSS Bucket name.
         * <p>
         * @return {@code this}
         * @param instanceStorageName Property instanceStorageName: Custom OSS Bucket name. This parameter is required.
         */
        public Builder instanceStorageName(final com.aliyun.ros.cdk.core.IResolvable instanceStorageName) {
            this.props.instanceStorageName(instanceStorageName);
            return this;
        }

        /**
         * Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.
         * <p>
         * <ul>
         * <li>ManualRenewal: manual renewal.
         * Default ManualRenewal.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param renewalStatus Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal. This parameter is required.
         */
        public Builder renewalStatus(final java.lang.String renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }
        /**
         * Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.
         * <p>
         * <ul>
         * <li>ManualRenewal: manual renewal.
         * Default ManualRenewal.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param renewalStatus Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal. This parameter is required.
         */
        public Builder renewalStatus(final com.aliyun.ros.cdk.core.IResolvable renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }

        /**
         * Property renewPeriod: Automatic renewal cycle, in months.
         * <p>
         * When RenewalStatus is set to AutoRenewal, it must be set.
         * <p>
         * @return {@code this}
         * @param renewPeriod Property renewPeriod: Automatic renewal cycle, in months. This parameter is required.
         */
        public Builder renewPeriod(final java.lang.Number renewPeriod) {
            this.props.renewPeriod(renewPeriod);
            return this;
        }
        /**
         * Property renewPeriod: Automatic renewal cycle, in months.
         * <p>
         * When RenewalStatus is set to AutoRenewal, it must be set.
         * <p>
         * @return {@code this}
         * @param renewPeriod Property renewPeriod: Automatic renewal cycle, in months. This parameter is required.
         */
        public Builder renewPeriod(final com.aliyun.ros.cdk.core.IResolvable renewPeriod) {
            this.props.renewPeriod(renewPeriod);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cr.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.cr.Instance build() {
            return new com.aliyun.ros.cdk.cr.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
