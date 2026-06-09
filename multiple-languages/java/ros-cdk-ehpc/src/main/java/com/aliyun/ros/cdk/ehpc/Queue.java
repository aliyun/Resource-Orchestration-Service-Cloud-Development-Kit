package com.aliyun.ros.cdk.ehpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::EHPC::Queue</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:42:12.695Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.Queue")
public class Queue extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ehpc.IQueue {

    protected Queue(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Queue(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Queue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ehpc.QueueProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Queue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ehpc.QueueProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Queue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ComputeNodes: The hardware configurations of the compute nodes in the queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrComputeNodes() {
        return software.amazon.jsii.Kernel.get(this, "attrComputeNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: Queue creation time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnableScaleIn: Specifies whether to enable auto scale-in for the queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableScaleIn() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableScaleIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnableScaleOut: Specifies whether to enable auto scale-out for the queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableScaleOut() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableScaleOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HostnamePrefix: The hostname prefix of the added compute nodes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostnamePrefix() {
        return software.amazon.jsii.Kernel.get(this, "attrHostnamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HostnameSuffix: The hostname suffix of the compute nodes in the queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostnameSuffix() {
        return software.amazon.jsii.Kernel.get(this, "attrHostnameSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InitialCount: The initial number of compute nodes in the queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInitialCount() {
        return software.amazon.jsii.Kernel.get(this, "attrInitialCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InterConnect: The type of the network for interconnecting compute nodes in the queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterConnect() {
        return software.amazon.jsii.Kernel.get(this, "attrInterConnect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MaxCount: The maximum number of compute nodes that the queue can contain.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxCount() {
        return software.amazon.jsii.Kernel.get(this, "attrMaxCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MinCount: The minimum number of compute nodes that the queue must contain.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinCount() {
        return software.amazon.jsii.Kernel.get(this, "attrMinCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute QueueName: The queue name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueName() {
        return software.amazon.jsii.Kernel.get(this, "attrQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdateTime: Queue update time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VSwitchIds: The VSwitches available for use by compute nodes in the queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchIds() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.QueueProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ehpc.QueueProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ehpc.Queue}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ehpc.Queue> {
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
        private com.aliyun.ros.cdk.ehpc.QueueProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property clusterId: The cluster ID.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The cluster ID. This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props().clusterId(clusterId);
            return this;
        }
        /**
         * Property clusterId: The cluster ID.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The cluster ID. This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props().clusterId(clusterId);
            return this;
        }

        /**
         * Property computeNodes: The hardware configurations of the compute nodes in the queue.
         * <p>
         * Valid values of N: 1 to 10.
         * <p>
         * @return {@code this}
         * @param computeNodes Property computeNodes: The hardware configurations of the compute nodes in the queue. This parameter is required.
         */
        public Builder computeNodes(final com.aliyun.ros.cdk.core.IResolvable computeNodes) {
            this.props().computeNodes(computeNodes);
            return this;
        }
        /**
         * Property computeNodes: The hardware configurations of the compute nodes in the queue.
         * <p>
         * Valid values of N: 1 to 10.
         * <p>
         * @return {@code this}
         * @param computeNodes Property computeNodes: The hardware configurations of the compute nodes in the queue. This parameter is required.
         */
        public Builder computeNodes(final java.util.List<? extends java.lang.Object> computeNodes) {
            this.props().computeNodes(computeNodes);
            return this;
        }

        /**
         * Property enableScaleIn: Specifies whether to enable auto scale-in for the queue.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true</li>
         * <li>false.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enableScaleIn Property enableScaleIn: Specifies whether to enable auto scale-in for the queue. This parameter is required.
         */
        public Builder enableScaleIn(final java.lang.Boolean enableScaleIn) {
            this.props().enableScaleIn(enableScaleIn);
            return this;
        }
        /**
         * Property enableScaleIn: Specifies whether to enable auto scale-in for the queue.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true</li>
         * <li>false.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enableScaleIn Property enableScaleIn: Specifies whether to enable auto scale-in for the queue. This parameter is required.
         */
        public Builder enableScaleIn(final com.aliyun.ros.cdk.core.IResolvable enableScaleIn) {
            this.props().enableScaleIn(enableScaleIn);
            return this;
        }

        /**
         * Property enableScaleOut: Specifies whether to enable auto scale-out for the queue.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true</li>
         * <li>false.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enableScaleOut Property enableScaleOut: Specifies whether to enable auto scale-out for the queue. This parameter is required.
         */
        public Builder enableScaleOut(final java.lang.Boolean enableScaleOut) {
            this.props().enableScaleOut(enableScaleOut);
            return this;
        }
        /**
         * Property enableScaleOut: Specifies whether to enable auto scale-out for the queue.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true</li>
         * <li>false.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enableScaleOut Property enableScaleOut: Specifies whether to enable auto scale-out for the queue. This parameter is required.
         */
        public Builder enableScaleOut(final com.aliyun.ros.cdk.core.IResolvable enableScaleOut) {
            this.props().enableScaleOut(enableScaleOut);
            return this;
        }

        /**
         * Property hostnamePrefix: The hostname prefix of the added compute nodes.
         * <p>
         * @return {@code this}
         * @param hostnamePrefix Property hostnamePrefix: The hostname prefix of the added compute nodes. This parameter is required.
         */
        public Builder hostnamePrefix(final java.lang.String hostnamePrefix) {
            this.props().hostnamePrefix(hostnamePrefix);
            return this;
        }
        /**
         * Property hostnamePrefix: The hostname prefix of the added compute nodes.
         * <p>
         * @return {@code this}
         * @param hostnamePrefix Property hostnamePrefix: The hostname prefix of the added compute nodes. This parameter is required.
         */
        public Builder hostnamePrefix(final com.aliyun.ros.cdk.core.IResolvable hostnamePrefix) {
            this.props().hostnamePrefix(hostnamePrefix);
            return this;
        }

        /**
         * Property hostnameSuffix: The hostname suffix of the compute nodes in the queue.
         * <p>
         * @return {@code this}
         * @param hostnameSuffix Property hostnameSuffix: The hostname suffix of the compute nodes in the queue. This parameter is required.
         */
        public Builder hostnameSuffix(final java.lang.String hostnameSuffix) {
            this.props().hostnameSuffix(hostnameSuffix);
            return this;
        }
        /**
         * Property hostnameSuffix: The hostname suffix of the compute nodes in the queue.
         * <p>
         * @return {@code this}
         * @param hostnameSuffix Property hostnameSuffix: The hostname suffix of the compute nodes in the queue. This parameter is required.
         */
        public Builder hostnameSuffix(final com.aliyun.ros.cdk.core.IResolvable hostnameSuffix) {
            this.props().hostnameSuffix(hostnameSuffix);
            return this;
        }

        /**
         * Property initialCount: The initial number of compute nodes in the queue.
         * <p>
         * @return {@code this}
         * @param initialCount Property initialCount: The initial number of compute nodes in the queue. This parameter is required.
         */
        public Builder initialCount(final java.lang.Number initialCount) {
            this.props().initialCount(initialCount);
            return this;
        }
        /**
         * Property initialCount: The initial number of compute nodes in the queue.
         * <p>
         * @return {@code this}
         * @param initialCount Property initialCount: The initial number of compute nodes in the queue. This parameter is required.
         */
        public Builder initialCount(final com.aliyun.ros.cdk.core.IResolvable initialCount) {
            this.props().initialCount(initialCount);
            return this;
        }

        /**
         * Property interConnect: The type of the network for interconnecting compute nodes in the queue.
         * <p>
         * @return {@code this}
         * @param interConnect Property interConnect: The type of the network for interconnecting compute nodes in the queue. This parameter is required.
         */
        public Builder interConnect(final java.lang.String interConnect) {
            this.props().interConnect(interConnect);
            return this;
        }
        /**
         * Property interConnect: The type of the network for interconnecting compute nodes in the queue.
         * <p>
         * @return {@code this}
         * @param interConnect Property interConnect: The type of the network for interconnecting compute nodes in the queue. This parameter is required.
         */
        public Builder interConnect(final com.aliyun.ros.cdk.core.IResolvable interConnect) {
            this.props().interConnect(interConnect);
            return this;
        }

        /**
         * Property maxCount: The maximum number of compute nodes that the queue can contain.
         * <p>
         * @return {@code this}
         * @param maxCount Property maxCount: The maximum number of compute nodes that the queue can contain. This parameter is required.
         */
        public Builder maxCount(final java.lang.Number maxCount) {
            this.props().maxCount(maxCount);
            return this;
        }
        /**
         * Property maxCount: The maximum number of compute nodes that the queue can contain.
         * <p>
         * @return {@code this}
         * @param maxCount Property maxCount: The maximum number of compute nodes that the queue can contain. This parameter is required.
         */
        public Builder maxCount(final com.aliyun.ros.cdk.core.IResolvable maxCount) {
            this.props().maxCount(maxCount);
            return this;
        }

        /**
         * Property minCount: The minimum number of compute nodes that the queue must contain.
         * <p>
         * @return {@code this}
         * @param minCount Property minCount: The minimum number of compute nodes that the queue must contain. This parameter is required.
         */
        public Builder minCount(final java.lang.Number minCount) {
            this.props().minCount(minCount);
            return this;
        }
        /**
         * Property minCount: The minimum number of compute nodes that the queue must contain.
         * <p>
         * @return {@code this}
         * @param minCount Property minCount: The minimum number of compute nodes that the queue must contain. This parameter is required.
         */
        public Builder minCount(final com.aliyun.ros.cdk.core.IResolvable minCount) {
            this.props().minCount(minCount);
            return this;
        }

        /**
         * Property queueName: The queue name.
         * <p>
         * @return {@code this}
         * @param queueName Property queueName: The queue name. This parameter is required.
         */
        public Builder queueName(final java.lang.String queueName) {
            this.props().queueName(queueName);
            return this;
        }
        /**
         * Property queueName: The queue name.
         * <p>
         * @return {@code this}
         * @param queueName Property queueName: The queue name. This parameter is required.
         */
        public Builder queueName(final com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.props().queueName(queueName);
            return this;
        }

        /**
         * Property vSwitchIds: The VSwitches available for use by compute nodes in the queue.
         * <p>
         * @return {@code this}
         * @param vSwitchIds Property vSwitchIds: The VSwitches available for use by compute nodes in the queue. This parameter is required.
         */
        public Builder vSwitchIds(final com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.props().vSwitchIds(vSwitchIds);
            return this;
        }
        /**
         * Property vSwitchIds: The VSwitches available for use by compute nodes in the queue.
         * <p>
         * @return {@code this}
         * @param vSwitchIds Property vSwitchIds: The VSwitches available for use by compute nodes in the queue. This parameter is required.
         */
        public Builder vSwitchIds(final java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.props().vSwitchIds(vSwitchIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ehpc.Queue}.
         */
        @Override
        public com.aliyun.ros.cdk.ehpc.Queue build() {
            return new com.aliyun.ros.cdk.ehpc.Queue(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ehpc.QueueProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ehpc.QueueProps.Builder();
            }
            return this.props;
        }
    }
}
