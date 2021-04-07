package com.aliyun.ros.cdk.uis;

/**
 * A ROS resource type:  `ALIYUN::UIS::UisNode`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:43.134Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.uis.$Module.class, fqn = "@alicloud/ros-cdk-uis.UisNode")
public class UisNode extends com.aliyun.ros.cdk.core.Resource {

    protected UisNode(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected UisNode(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::UIS::UisNode`.
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
    public UisNode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.uis.UisNodeProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::UIS::UisNode`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public UisNode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.uis.UisNodeProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute UisNodeActiveIps: The node active IP list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUisNodeActiveIps() {
        return software.amazon.jsii.Kernel.get(this, "attrUisNodeActiveIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UisNodeId: The node ID of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUisNodeId() {
        return software.amazon.jsii.Kernel.get(this, "attrUisNodeId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UisNodeIps: The node IP list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUisNodeIps() {
        return software.amazon.jsii.Kernel.get(this, "attrUisNodeIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.uis.UisNode}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.uis.UisNode> {
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
        private final com.aliyun.ros.cdk.uis.UisNodeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.uis.UisNodeProps.Builder();
        }

        /**
         * Property ipAddrsNum: The number of IPs available at the boarding point.
         * <p>
         * The default is 2, the maximum is 10, if you need more quota, please submit the work order.
         * <p>
         * @return {@code this}
         * @param ipAddrsNum Property ipAddrsNum: The number of IPs available at the boarding point. This parameter is required.
         */
        public Builder ipAddrsNum(final java.lang.Number ipAddrsNum) {
            this.props.ipAddrsNum(ipAddrsNum);
            return this;
        }
        /**
         * Property ipAddrsNum: The number of IPs available at the boarding point.
         * <p>
         * The default is 2, the maximum is 10, if you need more quota, please submit the work order.
         * <p>
         * @return {@code this}
         * @param ipAddrsNum Property ipAddrsNum: The number of IPs available at the boarding point. This parameter is required.
         */
        public Builder ipAddrsNum(final com.aliyun.ros.cdk.core.IResolvable ipAddrsNum) {
            this.props.ipAddrsNum(ipAddrsNum);
            return this;
        }

        /**
         * Property uisId: The instance ID to which the boarding point belongs.
         * <p>
         * @return {@code this}
         * @param uisId Property uisId: The instance ID to which the boarding point belongs. This parameter is required.
         */
        public Builder uisId(final java.lang.String uisId) {
            this.props.uisId(uisId);
            return this;
        }
        /**
         * Property uisId: The instance ID to which the boarding point belongs.
         * <p>
         * @return {@code this}
         * @param uisId Property uisId: The instance ID to which the boarding point belongs. This parameter is required.
         */
        public Builder uisId(final com.aliyun.ros.cdk.core.IResolvable uisId) {
            this.props.uisId(uisId);
            return this;
        }

        /**
         * Property uisNodeAreaId: Specifies the territory ID of the node.
         * <p>
         * You can query the supported territories through the DescribeRegions interface.
         * <p>
         * @return {@code this}
         * @param uisNodeAreaId Property uisNodeAreaId: Specifies the territory ID of the node. This parameter is required.
         */
        public Builder uisNodeAreaId(final java.lang.String uisNodeAreaId) {
            this.props.uisNodeAreaId(uisNodeAreaId);
            return this;
        }
        /**
         * Property uisNodeAreaId: Specifies the territory ID of the node.
         * <p>
         * You can query the supported territories through the DescribeRegions interface.
         * <p>
         * @return {@code this}
         * @param uisNodeAreaId Property uisNodeAreaId: Specifies the territory ID of the node. This parameter is required.
         */
        public Builder uisNodeAreaId(final com.aliyun.ros.cdk.core.IResolvable uisNodeAreaId) {
            this.props.uisNodeAreaId(uisNodeAreaId);
            return this;
        }

        /**
         * Property uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.
         * <p>
         * If you do not specify a bandwidth, the default value is 20Mbps.
         * <p>
         * @return {@code this}
         * @param uisNodeBandwidth Property uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth. This parameter is required.
         */
        public Builder uisNodeBandwidth(final java.lang.Number uisNodeBandwidth) {
            this.props.uisNodeBandwidth(uisNodeBandwidth);
            return this;
        }
        /**
         * Property uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.
         * <p>
         * If you do not specify a bandwidth, the default value is 20Mbps.
         * <p>
         * @return {@code this}
         * @param uisNodeBandwidth Property uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth. This parameter is required.
         */
        public Builder uisNodeBandwidth(final com.aliyun.ros.cdk.core.IResolvable uisNodeBandwidth) {
            this.props.uisNodeBandwidth(uisNodeBandwidth);
            return this;
        }

        /**
         * Property description: Description of the instance of the boarding point.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the instance of the boarding point. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the instance of the boarding point.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the instance of the boarding point. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property name: The name of the instance of the boarding point.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the instance of the boarding point. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the instance of the boarding point.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the instance of the boarding point. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.uis.UisNode}.
         */
        @Override
        public com.aliyun.ros.cdk.uis.UisNode build() {
            return new com.aliyun.ros.cdk.uis.UisNode(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
