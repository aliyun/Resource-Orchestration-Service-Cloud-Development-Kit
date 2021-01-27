package com.aliyun.ros.cdk.ehpc;

/**
 * A ROS resource type:  `ALIYUN::EHPC::Cluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.838Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.Cluster")
public class Cluster extends com.aliyun.ros.cdk.core.Resource {

    protected Cluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Cluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::EHPC::Cluster`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.ClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::EHPC::Cluster`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.ClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrEcsInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ehpc.Cluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ehpc.Cluster> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ehpc.ClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ehpc.ClusterProps.Builder();
        }

        /**
         * @return {@code this}
         * @param ecsOrderComputeCount This parameter is required.
         */
        public Builder ecsOrderComputeCount(final java.lang.Number ecsOrderComputeCount) {
            this.props.ecsOrderComputeCount(ecsOrderComputeCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsOrderComputeInstanceType This parameter is required.
         */
        public Builder ecsOrderComputeInstanceType(final java.lang.String ecsOrderComputeInstanceType) {
            this.props.ecsOrderComputeInstanceType(ecsOrderComputeInstanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsOrderLoginCount This parameter is required.
         */
        public Builder ecsOrderLoginCount(final java.lang.Number ecsOrderLoginCount) {
            this.props.ecsOrderLoginCount(ecsOrderLoginCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsOrderLoginInstanceType This parameter is required.
         */
        public Builder ecsOrderLoginInstanceType(final java.lang.String ecsOrderLoginInstanceType) {
            this.props.ecsOrderLoginInstanceType(ecsOrderLoginInstanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsOrderManagerInstanceType This parameter is required.
         */
        public Builder ecsOrderManagerInstanceType(final java.lang.String ecsOrderManagerInstanceType) {
            this.props.ecsOrderManagerInstanceType(ecsOrderManagerInstanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param ehpcVersion This parameter is required.
         */
        public Builder ehpcVersion(final java.lang.String ehpcVersion) {
            this.props.ehpcVersion(ehpcVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param osTag This parameter is required.
         */
        public Builder osTag(final java.lang.String osTag) {
            this.props.osTag(osTag);
            return this;
        }

        /**
         * @return {@code this}
         * @param volumeId This parameter is required.
         */
        public Builder volumeId(final java.lang.String volumeId) {
            this.props.volumeId(volumeId);
            return this;
        }

        /**
         * @return {@code this}
         * @param volumeMountpoint This parameter is required.
         */
        public Builder volumeMountpoint(final java.lang.String volumeMountpoint) {
            this.props.volumeMountpoint(volumeMountpoint);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param accountType This parameter is required.
         */
        public Builder accountType(final java.lang.String accountType) {
            this.props.accountType(accountType);
            return this;
        }

        /**
         * @return {@code this}
         * @param application This parameter is required.
         */
        public Builder application(final com.aliyun.ros.cdk.core.IResolvable application) {
            this.props.application(application);
            return this;
        }
        /**
         * @return {@code this}
         * @param application This parameter is required.
         */
        public Builder application(final java.util.List<? extends java.lang.Object> application) {
            this.props.application(application);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenewPeriod This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param computeSpotPriceLimit This parameter is required.
         */
        public Builder computeSpotPriceLimit(final java.lang.String computeSpotPriceLimit) {
            this.props.computeSpotPriceLimit(computeSpotPriceLimit);
            return this;
        }

        /**
         * @return {@code this}
         * @param computeSpotStrategy This parameter is required.
         */
        public Builder computeSpotStrategy(final java.lang.String computeSpotStrategy) {
            this.props.computeSpotStrategy(computeSpotStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param deployMode This parameter is required.
         */
        public Builder deployMode(final java.lang.String deployMode) {
            this.props.deployMode(deployMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsChargeType This parameter is required.
         */
        public Builder ecsChargeType(final java.lang.String ecsChargeType) {
            this.props.ecsChargeType(ecsChargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsOrderManagerCount This parameter is required.
         */
        public Builder ecsOrderManagerCount(final java.lang.Number ecsOrderManagerCount) {
            this.props.ecsOrderManagerCount(ecsOrderManagerCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param haEnable This parameter is required.
         */
        public Builder haEnable(final java.lang.Boolean haEnable) {
            this.props.haEnable(haEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param haEnable This parameter is required.
         */
        public Builder haEnable(final com.aliyun.ros.cdk.core.IResolvable haEnable) {
            this.props.haEnable(haEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageId This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageOwnerAlias This parameter is required.
         */
        public Builder imageOwnerAlias(final java.lang.String imageOwnerAlias) {
            this.props.imageOwnerAlias(imageOwnerAlias);
            return this;
        }

        /**
         * @return {@code this}
         * @param jobQueue This parameter is required.
         */
        public Builder jobQueue(final java.lang.String jobQueue) {
            this.props.jobQueue(jobQueue);
            return this;
        }

        /**
         * @return {@code this}
         * @param keyPairName This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param postInstallScript This parameter is required.
         */
        public Builder postInstallScript(final com.aliyun.ros.cdk.core.IResolvable postInstallScript) {
            this.props.postInstallScript(postInstallScript);
            return this;
        }
        /**
         * @return {@code this}
         * @param postInstallScript This parameter is required.
         */
        public Builder postInstallScript(final java.util.List<? extends java.lang.Object> postInstallScript) {
            this.props.postInstallScript(postInstallScript);
            return this;
        }

        /**
         * @return {@code this}
         * @param remoteDirectory This parameter is required.
         */
        public Builder remoteDirectory(final java.lang.String remoteDirectory) {
            this.props.remoteDirectory(remoteDirectory);
            return this;
        }

        /**
         * @return {@code this}
         * @param sccClusterId This parameter is required.
         */
        public Builder sccClusterId(final java.lang.String sccClusterId) {
            this.props.sccClusterId(sccClusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param schedulerType This parameter is required.
         */
        public Builder schedulerType(final java.lang.String schedulerType) {
            this.props.schedulerType(schedulerType);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupName This parameter is required.
         */
        public Builder securityGroupName(final java.lang.String securityGroupName) {
            this.props.securityGroupName(securityGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param volumeProtocol This parameter is required.
         */
        public Builder volumeProtocol(final java.lang.String volumeProtocol) {
            this.props.volumeProtocol(volumeProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param volumeType This parameter is required.
         */
        public Builder volumeType(final java.lang.String volumeType) {
            this.props.volumeType(volumeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ehpc.Cluster}.
         */
        @Override
        public com.aliyun.ros.cdk.ehpc.Cluster build() {
            return new com.aliyun.ros.cdk.ehpc.Cluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
