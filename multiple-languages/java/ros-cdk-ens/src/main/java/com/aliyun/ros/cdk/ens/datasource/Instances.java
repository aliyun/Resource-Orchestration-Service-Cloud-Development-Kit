package com.aliyun.ros.cdk.ens.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ENS::Instances</code>, which is used to query the details of Edge Node Service (ENS) instances.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:26.983Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.datasource.Instances")
public class Instances extends com.aliyun.ros.cdk.core.Resource {

    protected Instances(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instances(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ens.datasource.InstancesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ens.datasource.InstancesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Instances: The list of instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrInstances", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.datasource.InstancesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ens.datasource.InstancesProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.datasource.InstancesProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ens.datasource.Instances}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ens.datasource.Instances> {
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
        private com.aliyun.ros.cdk.ens.datasource.InstancesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property ensRegionIds: The list of ENS region IDs.
         * <p>
         * @return {@code this}
         * @param ensRegionIds Property ensRegionIds: The list of ENS region IDs. This parameter is required.
         */
        public Builder ensRegionIds(final java.util.List<? extends java.lang.Object> ensRegionIds) {
            this.props().ensRegionIds(ensRegionIds);
            return this;
        }
        /**
         * Property ensRegionIds: The list of ENS region IDs.
         * <p>
         * @return {@code this}
         * @param ensRegionIds Property ensRegionIds: The list of ENS region IDs. This parameter is required.
         */
        public Builder ensRegionIds(final com.aliyun.ros.cdk.core.IResolvable ensRegionIds) {
            this.props().ensRegionIds(ensRegionIds);
            return this;
        }

        /**
         * Property ensServiceId: The ID of ENS service.
         * <p>
         * @return {@code this}
         * @param ensServiceId Property ensServiceId: The ID of ENS service. This parameter is required.
         */
        public Builder ensServiceId(final java.lang.String ensServiceId) {
            this.props().ensServiceId(ensServiceId);
            return this;
        }
        /**
         * Property ensServiceId: The ID of ENS service.
         * <p>
         * @return {@code this}
         * @param ensServiceId Property ensServiceId: The ID of ENS service. This parameter is required.
         */
        public Builder ensServiceId(final com.aliyun.ros.cdk.core.IResolvable ensServiceId) {
            this.props().ensServiceId(ensServiceId);
            return this;
        }

        /**
         * Property imageId: The image ID of instance.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The image ID of instance. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props().imageId(imageId);
            return this;
        }
        /**
         * Property imageId: The image ID of instance.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The image ID of instance. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props().imageId(imageId);
            return this;
        }

        /**
         * Property instanceIds: The list of instance IDs.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The list of instance IDs. This parameter is required.
         */
        public Builder instanceIds(final java.util.List<? extends java.lang.Object> instanceIds) {
            this.props().instanceIds(instanceIds);
            return this;
        }
        /**
         * Property instanceIds: The list of instance IDs.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The list of instance IDs. This parameter is required.
         */
        public Builder instanceIds(final com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.props().instanceIds(instanceIds);
            return this;
        }

        /**
         * Property instanceName: The name of instance.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of instance. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of instance.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of instance. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }

        /**
         * Property instanceResourceType: The resource type of instance.
         * <p>
         * Valid values:
         * EnsPostPaidInstance: PostPaid instance.
         * EnsService: Edge service instance.
         * BuildMachine: Image building machine.
         * <p>
         * @return {@code this}
         * @param instanceResourceType Property instanceResourceType: The resource type of instance. This parameter is required.
         */
        public Builder instanceResourceType(final java.lang.String instanceResourceType) {
            this.props().instanceResourceType(instanceResourceType);
            return this;
        }
        /**
         * Property instanceResourceType: The resource type of instance.
         * <p>
         * Valid values:
         * EnsPostPaidInstance: PostPaid instance.
         * EnsService: Edge service instance.
         * BuildMachine: Image building machine.
         * <p>
         * @return {@code this}
         * @param instanceResourceType Property instanceResourceType: The resource type of instance. This parameter is required.
         */
        public Builder instanceResourceType(final com.aliyun.ros.cdk.core.IResolvable instanceResourceType) {
            this.props().instanceResourceType(instanceResourceType);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }

        /**
         * Property status: The status of instance.
         * <p>
         * @return {@code this}
         * @param status Property status: The status of instance. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props().status(status);
            return this;
        }
        /**
         * Property status: The status of instance.
         * <p>
         * @return {@code this}
         * @param status Property status: The status of instance. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props().status(status);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ens.datasource.Instances}.
         */
        @Override
        public com.aliyun.ros.cdk.ens.datasource.Instances build() {
            return new com.aliyun.ros.cdk.ens.datasource.Instances(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ens.datasource.InstancesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ens.datasource.InstancesProps.Builder();
            }
            return this.props;
        }
    }
}
