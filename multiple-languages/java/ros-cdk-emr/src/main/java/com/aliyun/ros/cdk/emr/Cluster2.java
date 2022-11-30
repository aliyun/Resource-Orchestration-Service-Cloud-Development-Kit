package com.aliyun.ros.cdk.emr;

/**
 * A ROS resource type:  `ALIYUN::EMR::Cluster2`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:19.396Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.Cluster2")
public class Cluster2 extends com.aliyun.ros.cdk.core.Resource {

    protected Cluster2(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Cluster2(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::EMR::Cluster2`.
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
    public Cluster2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.Cluster2Props props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::EMR::Cluster2`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Cluster2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.Cluster2Props props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: Cluster ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.Cluster2}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.Cluster2> {
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
        private final com.aliyun.ros.cdk.emr.Cluster2Props.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.emr.Cluster2Props.Builder();
        }

        /**
         * Property applications: Application List.The value range of the number n of the number N group: 1 ~ 100.
         * <p>
         * @return {@code this}
         * @param applications Property applications: Application List.The value range of the number n of the number N group: 1 ~ 100. This parameter is required.
         */
        public Builder applications(final com.aliyun.ros.cdk.core.IResolvable applications) {
            this.props.applications(applications);
            return this;
        }
        /**
         * Property applications: Application List.The value range of the number n of the number N group: 1 ~ 100.
         * <p>
         * @return {@code this}
         * @param applications Property applications: Application List.The value range of the number n of the number N group: 1 ~ 100. This parameter is required.
         */
        public Builder applications(final java.util.List<? extends java.lang.Object> applications) {
            this.props.applications(applications);
            return this;
        }

        /**
         * Property clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:// and https: //.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-).
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:// and https: //.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-). This parameter is required.
         */
        public Builder clusterName(final java.lang.String clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }
        /**
         * Property clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:// and https: //.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-).
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:// and https: //.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-). This parameter is required.
         */
        public Builder clusterName(final com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }

        /**
         * Property clusterType: Cluster type.Ranges: Datalake: The new version of the data lake. OLAP: Data analysis. DataFlow: Real -time data stream. DataServing: Data service. Hadoop: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake).
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: Cluster type.Ranges: Datalake: The new version of the data lake. OLAP: Data analysis. DataFlow: Real -time data stream. DataServing: Data service. Hadoop: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake). This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }
        /**
         * Property clusterType: Cluster type.Ranges: Datalake: The new version of the data lake. OLAP: Data analysis. DataFlow: Real -time data stream. DataServing: Data service. Hadoop: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake).
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: Cluster type.Ranges: Datalake: The new version of the data lake. OLAP: Data analysis. DataFlow: Real -time data stream. DataServing: Data service. Hadoop: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake). This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * Property nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.
         * <p>
         * @return {@code this}
         * @param nodeAttributes Property nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster. This parameter is required.
         */
        public Builder nodeAttributes(final com.aliyun.ros.cdk.core.IResolvable nodeAttributes) {
            this.props.nodeAttributes(nodeAttributes);
            return this;
        }
        /**
         * Property nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.
         * <p>
         * @return {@code this}
         * @param nodeAttributes Property nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster. This parameter is required.
         */
        public Builder nodeAttributes(final com.aliyun.ros.cdk.emr.RosCluster2.NodeAttributesProperty nodeAttributes) {
            this.props.nodeAttributes(nodeAttributes);
            return this;
        }

        /**
         * Property nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.
         * <p>
         * @return {@code this}
         * @param nodeGroups Property nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100. This parameter is required.
         */
        public Builder nodeGroups(final com.aliyun.ros.cdk.core.IResolvable nodeGroups) {
            this.props.nodeGroups(nodeGroups);
            return this;
        }
        /**
         * Property nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.
         * <p>
         * @return {@code this}
         * @param nodeGroups Property nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100. This parameter is required.
         */
        public Builder nodeGroups(final java.util.List<? extends java.lang.Object> nodeGroups) {
            this.props.nodeGroups(nodeGroups);
            return this;
        }

        /**
         * Property releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.
         * <p>
         * @return {@code this}
         * @param releaseVersion Property releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster. This parameter is required.
         */
        public Builder releaseVersion(final java.lang.String releaseVersion) {
            this.props.releaseVersion(releaseVersion);
            return this;
        }
        /**
         * Property releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.
         * <p>
         * @return {@code this}
         * @param releaseVersion Property releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster. This parameter is required.
         */
        public Builder releaseVersion(final com.aliyun.ros.cdk.core.IResolvable releaseVersion) {
            this.props.releaseVersion(releaseVersion);
            return this;
        }

        /**
         * Property applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.
         * <p>
         * @return {@code this}
         * @param applicationConfigs Property applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000. This parameter is required.
         */
        public Builder applicationConfigs(final com.aliyun.ros.cdk.core.IResolvable applicationConfigs) {
            this.props.applicationConfigs(applicationConfigs);
            return this;
        }
        /**
         * Property applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.
         * <p>
         * @return {@code this}
         * @param applicationConfigs Property applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000. This parameter is required.
         */
        public Builder applicationConfigs(final java.util.List<? extends java.lang.Object> applicationConfigs) {
            this.props.applicationConfigs(applicationConfigs);
            return this;
        }

        /**
         * Property bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.
         * <p>
         * @return {@code this}
         * @param bootstrapScripts Property bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10. This parameter is required.
         */
        public Builder bootstrapScripts(final com.aliyun.ros.cdk.core.IResolvable bootstrapScripts) {
            this.props.bootstrapScripts(bootstrapScripts);
            return this;
        }
        /**
         * Property bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.
         * <p>
         * @return {@code this}
         * @param bootstrapScripts Property bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10. This parameter is required.
         */
        public Builder bootstrapScripts(final java.util.List<? extends java.lang.Object> bootstrapScripts) {
            this.props.bootstrapScripts(bootstrapScripts);
            return this;
        }

        /**
         * Property deployMode: Application deployment mode in the cluster.Ranges: Normal: non -high available deployment.Cluster 1 master node. HA: High availability deployment.High availability deployment requires at least 3 master nodes.
         * <p>
         * @return {@code this}
         * @param deployMode Property deployMode: Application deployment mode in the cluster.Ranges: Normal: non -high available deployment.Cluster 1 master node. HA: High availability deployment.High availability deployment requires at least 3 master nodes. This parameter is required.
         */
        public Builder deployMode(final java.lang.String deployMode) {
            this.props.deployMode(deployMode);
            return this;
        }
        /**
         * Property deployMode: Application deployment mode in the cluster.Ranges: Normal: non -high available deployment.Cluster 1 master node. HA: High availability deployment.High availability deployment requires at least 3 master nodes.
         * <p>
         * @return {@code this}
         * @param deployMode Property deployMode: Application deployment mode in the cluster.Ranges: Normal: non -high available deployment.Cluster 1 master node. HA: High availability deployment.High availability deployment requires at least 3 master nodes. This parameter is required.
         */
        public Builder deployMode(final com.aliyun.ros.cdk.core.IResolvable deployMode) {
            this.props.deployMode(deployMode);
            return this;
        }

        /**
         * Property paymentType: Payment type.
         * <p>
         * Ranges:
         * PayAsYouGo: Post-paid, pay-as-you-go.
         * Subscription: Prepaid, yearly and monthly.
         * Default: PayAsYouGo.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: Payment type. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: Payment type.
         * <p>
         * Ranges:
         * PayAsYouGo: Post-paid, pay-as-you-go.
         * Subscription: Prepaid, yearly and monthly.
         * Default: PayAsYouGo.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: Payment type. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property securityMode: Cluster Kerberos security mode.Ranges: Normal: General mode, does not open the Kerberos mode. Kerberos: Open the Kerberos mode.
         * <p>
         * @return {@code this}
         * @param securityMode Property securityMode: Cluster Kerberos security mode.Ranges: Normal: General mode, does not open the Kerberos mode. Kerberos: Open the Kerberos mode. This parameter is required.
         */
        public Builder securityMode(final java.lang.String securityMode) {
            this.props.securityMode(securityMode);
            return this;
        }
        /**
         * Property securityMode: Cluster Kerberos security mode.Ranges: Normal: General mode, does not open the Kerberos mode. Kerberos: Open the Kerberos mode.
         * <p>
         * @return {@code this}
         * @param securityMode Property securityMode: Cluster Kerberos security mode.Ranges: Normal: General mode, does not open the Kerberos mode. Kerberos: Open the Kerberos mode. This parameter is required.
         */
        public Builder securityMode(final com.aliyun.ros.cdk.core.IResolvable securityMode) {
            this.props.securityMode(securityMode);
            return this;
        }

        /**
         * Property subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.
         * <p>
         * @return {@code this}
         * @param subscriptionConfig Property subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled. This parameter is required.
         */
        public Builder subscriptionConfig(final com.aliyun.ros.cdk.core.IResolvable subscriptionConfig) {
            this.props.subscriptionConfig(subscriptionConfig);
            return this;
        }
        /**
         * Property subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.
         * <p>
         * @return {@code this}
         * @param subscriptionConfig Property subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled. This parameter is required.
         */
        public Builder subscriptionConfig(final com.aliyun.ros.cdk.emr.RosCluster2.SubscriptionConfigProperty subscriptionConfig) {
            this.props.subscriptionConfig(subscriptionConfig);
            return this;
        }

        /**
         * Property tags: Tags to attach to cluster.
         * <p>
         * Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to cluster. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.emr.RosCluster2.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.emr.Cluster2}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.Cluster2 build() {
            return new com.aliyun.ros.cdk.emr.Cluster2(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
