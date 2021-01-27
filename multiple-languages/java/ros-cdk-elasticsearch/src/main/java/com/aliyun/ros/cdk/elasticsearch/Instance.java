package com.aliyun.ros.cdk.elasticsearch;

/**
 * A ROS resource type:  `ALIYUN::ElasticSearch::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.863Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearch.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearch.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ElasticSearch::Instance`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearch.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ElasticSearch::Instance`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearch.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKibanaDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrKibanaDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKibanaPort() {
        return software.amazon.jsii.Kernel.get(this, "attrKibanaPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.elasticsearch.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.elasticsearch.Instance> {
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
        private final com.aliyun.ros.cdk.elasticsearch.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.elasticsearch.InstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dataNode This parameter is required.
         */
        public Builder dataNode(final com.aliyun.ros.cdk.elasticsearch.RosInstance.DataNodeProperty dataNode) {
            this.props.dataNode(dataNode);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataNode This parameter is required.
         */
        public Builder dataNode(final com.aliyun.ros.cdk.core.IResolvable dataNode) {
            this.props.dataNode(dataNode);
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
         * @param version This parameter is required.
         */
        public Builder version(final java.lang.String version) {
            this.props.version(version);
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
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceChargeType This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param kibanaWhitelist This parameter is required.
         */
        public Builder kibanaWhitelist(final java.util.List<? extends java.lang.Object> kibanaWhitelist) {
            this.props.kibanaWhitelist(kibanaWhitelist);
            return this;
        }
        /**
         * @return {@code this}
         * @param kibanaWhitelist This parameter is required.
         */
        public Builder kibanaWhitelist(final com.aliyun.ros.cdk.core.IResolvable kibanaWhitelist) {
            this.props.kibanaWhitelist(kibanaWhitelist);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterNode This parameter is required.
         */
        public Builder masterNode(final com.aliyun.ros.cdk.core.IResolvable masterNode) {
            this.props.masterNode(masterNode);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterNode This parameter is required.
         */
        public Builder masterNode(final com.aliyun.ros.cdk.elasticsearch.RosInstance.MasterNodeProperty masterNode) {
            this.props.masterNode(masterNode);
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
         * @param privateWhitelist This parameter is required.
         */
        public Builder privateWhitelist(final java.util.List<? extends java.lang.Object> privateWhitelist) {
            this.props.privateWhitelist(privateWhitelist);
            return this;
        }
        /**
         * @return {@code this}
         * @param privateWhitelist This parameter is required.
         */
        public Builder privateWhitelist(final com.aliyun.ros.cdk.core.IResolvable privateWhitelist) {
            this.props.privateWhitelist(privateWhitelist);
            return this;
        }

        /**
         * @return {@code this}
         * @param publicWhitelist This parameter is required.
         */
        public Builder publicWhitelist(final java.util.List<? extends java.lang.Object> publicWhitelist) {
            this.props.publicWhitelist(publicWhitelist);
            return this;
        }
        /**
         * @return {@code this}
         * @param publicWhitelist This parameter is required.
         */
        public Builder publicWhitelist(final com.aliyun.ros.cdk.core.IResolvable publicWhitelist) {
            this.props.publicWhitelist(publicWhitelist);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.elasticsearch.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.elasticsearch.Instance build() {
            return new com.aliyun.ros.cdk.elasticsearch.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
