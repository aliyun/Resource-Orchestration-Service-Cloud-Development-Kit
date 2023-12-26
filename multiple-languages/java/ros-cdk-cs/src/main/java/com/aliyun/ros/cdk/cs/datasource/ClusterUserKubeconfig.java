package com.aliyun.ros.cdk.cs.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::CS::ClusterUserKubeconfig</code>, which is used to query the kubeconfig configurations of a Container Service for Kubernetes (ACK) cluster by cluster ID.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:14.742Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.datasource.ClusterUserKubeconfig")
public class ClusterUserKubeconfig extends com.aliyun.ros.cdk.core.Resource {

    protected ClusterUserKubeconfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ClusterUserKubeconfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ClusterUserKubeconfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.datasource.ClusterUserKubeconfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ClusterUserKubeconfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.datasource.ClusterUserKubeconfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: The ID of the ACK cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Config: The content of the kubeconfig file.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Expiration: The expiration time of the kubeconfig file.
     * <p>
     * The value is the UTC time displayed in RFC3339 format.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExpiration() {
        return software.amazon.jsii.Kernel.get(this, "attrExpiration", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.datasource.ClusterUserKubeconfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.datasource.ClusterUserKubeconfig> {
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
        private final com.aliyun.ros.cdk.cs.datasource.ClusterUserKubeconfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cs.datasource.ClusterUserKubeconfigProps.Builder();
        }

        /**
         * Property clusterId: The ID of the ACK cluster.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The ID of the ACK cluster. This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * Property clusterId: The ID of the ACK cluster.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The ID of the ACK cluster. This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * Property privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network.
         * <p>
         * Valid values:
         * true: obtains the credential that is used to connect to the cluster over the internal network.
         * false: obtains the credential that is used to connect to the cluster over the Internet.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network. This parameter is required.
         */
        public Builder privateIpAddress(final java.lang.Boolean privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }
        /**
         * Property privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network.
         * <p>
         * Valid values:
         * true: obtains the credential that is used to connect to the cluster over the internal network.
         * false: obtains the credential that is used to connect to the cluster over the Internet.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network. This parameter is required.
         */
        public Builder privateIpAddress(final com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }

        /**
         * Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file.
         * <p>
         * Unit: minutes. Valid values: 15 to 4320.
         * Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
         * <p>
         * @return {@code this}
         * @param temporaryDurationMinutes Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file. This parameter is required.
         */
        public Builder temporaryDurationMinutes(final java.lang.Number temporaryDurationMinutes) {
            this.props.temporaryDurationMinutes(temporaryDurationMinutes);
            return this;
        }
        /**
         * Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file.
         * <p>
         * Unit: minutes. Valid values: 15 to 4320.
         * Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
         * <p>
         * @return {@code this}
         * @param temporaryDurationMinutes Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file. This parameter is required.
         */
        public Builder temporaryDurationMinutes(final com.aliyun.ros.cdk.core.IResolvable temporaryDurationMinutes) {
            this.props.temporaryDurationMinutes(temporaryDurationMinutes);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cs.datasource.ClusterUserKubeconfig}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.datasource.ClusterUserKubeconfig build() {
            return new com.aliyun.ros.cdk.cs.datasource.ClusterUserKubeconfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
