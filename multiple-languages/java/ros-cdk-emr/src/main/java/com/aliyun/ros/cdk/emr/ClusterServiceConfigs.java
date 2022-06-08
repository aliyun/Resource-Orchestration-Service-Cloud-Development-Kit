package com.aliyun.ros.cdk.emr;

/**
 * A ROS resource type:  `ALIYUN::EMR::ClusterServiceConfigs`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-06-08T09:23:35.099Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.ClusterServiceConfigs")
public class ClusterServiceConfigs extends com.aliyun.ros.cdk.core.Resource {

    protected ClusterServiceConfigs(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ClusterServiceConfigs(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::EMR::ClusterServiceConfigs`.
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
    public ClusterServiceConfigs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.ClusterServiceConfigsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::EMR::ClusterServiceConfigs`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ClusterServiceConfigs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.ClusterServiceConfigsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.ClusterServiceConfigs}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.ClusterServiceConfigs> {
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
        private final com.aliyun.ros.cdk.emr.ClusterServiceConfigsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.emr.ClusterServiceConfigsProps.Builder();
        }

        /**
         * Property clusterId: The ID of the cluster.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The ID of the cluster. This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * Property clusterId: The ID of the cluster.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The ID of the cluster. This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * Property serviceConfigs: Server configs.
         * <p>
         * @return {@code this}
         * @param serviceConfigs Property serviceConfigs: Server configs. This parameter is required.
         */
        public Builder serviceConfigs(final com.aliyun.ros.cdk.core.IResolvable serviceConfigs) {
            this.props.serviceConfigs(serviceConfigs);
            return this;
        }
        /**
         * Property serviceConfigs: Server configs.
         * <p>
         * @return {@code this}
         * @param serviceConfigs Property serviceConfigs: Server configs. This parameter is required.
         */
        public Builder serviceConfigs(final java.util.List<? extends java.lang.Object> serviceConfigs) {
            this.props.serviceConfigs(serviceConfigs);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.emr.ClusterServiceConfigs}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.ClusterServiceConfigs build() {
            return new com.aliyun.ros.cdk.emr.ClusterServiceConfigs(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
