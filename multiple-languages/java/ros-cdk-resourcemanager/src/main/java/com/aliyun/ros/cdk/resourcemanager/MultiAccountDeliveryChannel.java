package com.aliyun.ros.cdk.resourcemanager;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ResourceManager::MultiAccountDeliveryChannel</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:38:07.270Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.MultiAccountDeliveryChannel")
public class MultiAccountDeliveryChannel extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.resourcemanager.IMultiAccountDeliveryChannel {

    protected MultiAccountDeliveryChannel(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MultiAccountDeliveryChannel(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public MultiAccountDeliveryChannel(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.MultiAccountDeliveryChannelProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public MultiAccountDeliveryChannel(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.MultiAccountDeliveryChannelProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DeliveryChannelDescription: The description of the delivery channel.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryChannelDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DeliveryChannelFilter: The effective scope of the delivery channel.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryChannelFilter() {
        return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelFilter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MultiAccountDeliveryChannelId: The delivery channel ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMultiAccountDeliveryChannelId() {
        return software.amazon.jsii.Kernel.get(this, "attrMultiAccountDeliveryChannelId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MultiAccountDeliveryChannelName: The name of the delivery channel.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMultiAccountDeliveryChannelName() {
        return software.amazon.jsii.Kernel.get(this, "attrMultiAccountDeliveryChannelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceChangeDelivery: The configurations for delivery of resource configuration change events.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceChangeDelivery() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceChangeDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceSnapshotDelivery() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceSnapshotDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.MultiAccountDeliveryChannelProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.MultiAccountDeliveryChannelProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.resourcemanager.MultiAccountDeliveryChannel}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.resourcemanager.MultiAccountDeliveryChannel> {
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
        private final com.aliyun.ros.cdk.resourcemanager.MultiAccountDeliveryChannelProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.resourcemanager.MultiAccountDeliveryChannelProps.Builder();
        }

        /**
         * Property deliveryChannelDescription: The description of the delivery channel.
         * <p>
         * @return {@code this}
         * @param deliveryChannelDescription Property deliveryChannelDescription: The description of the delivery channel. This parameter is required.
         */
        public Builder deliveryChannelDescription(final java.lang.String deliveryChannelDescription) {
            this.props.deliveryChannelDescription(deliveryChannelDescription);
            return this;
        }
        /**
         * Property deliveryChannelDescription: The description of the delivery channel.
         * <p>
         * @return {@code this}
         * @param deliveryChannelDescription Property deliveryChannelDescription: The description of the delivery channel. This parameter is required.
         */
        public Builder deliveryChannelDescription(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelDescription) {
            this.props.deliveryChannelDescription(deliveryChannelDescription);
            return this;
        }

        /**
         * Property deliveryChannelFilter: The effective scope of the delivery channel.
         * <p>
         * @return {@code this}
         * @param deliveryChannelFilter Property deliveryChannelFilter: The effective scope of the delivery channel. This parameter is required.
         */
        public Builder deliveryChannelFilter(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelFilter) {
            this.props.deliveryChannelFilter(deliveryChannelFilter);
            return this;
        }
        /**
         * Property deliveryChannelFilter: The effective scope of the delivery channel.
         * <p>
         * @return {@code this}
         * @param deliveryChannelFilter Property deliveryChannelFilter: The effective scope of the delivery channel. This parameter is required.
         */
        public Builder deliveryChannelFilter(final com.aliyun.ros.cdk.resourcemanager.RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty deliveryChannelFilter) {
            this.props.deliveryChannelFilter(deliveryChannelFilter);
            return this;
        }

        /**
         * Property multiAccountDeliveryChannelName: The name of the delivery channel.
         * <p>
         * @return {@code this}
         * @param multiAccountDeliveryChannelName Property multiAccountDeliveryChannelName: The name of the delivery channel. This parameter is required.
         */
        public Builder multiAccountDeliveryChannelName(final java.lang.String multiAccountDeliveryChannelName) {
            this.props.multiAccountDeliveryChannelName(multiAccountDeliveryChannelName);
            return this;
        }
        /**
         * Property multiAccountDeliveryChannelName: The name of the delivery channel.
         * <p>
         * @return {@code this}
         * @param multiAccountDeliveryChannelName Property multiAccountDeliveryChannelName: The name of the delivery channel. This parameter is required.
         */
        public Builder multiAccountDeliveryChannelName(final com.aliyun.ros.cdk.core.IResolvable multiAccountDeliveryChannelName) {
            this.props.multiAccountDeliveryChannelName(multiAccountDeliveryChannelName);
            return this;
        }

        /**
         * Property multiAccountDeliveryChannelId: Delivery Channel id.
         * <p>
         * @return {@code this}
         * @param multiAccountDeliveryChannelId Property multiAccountDeliveryChannelId: Delivery Channel id. This parameter is required.
         */
        public Builder multiAccountDeliveryChannelId(final java.lang.String multiAccountDeliveryChannelId) {
            this.props.multiAccountDeliveryChannelId(multiAccountDeliveryChannelId);
            return this;
        }
        /**
         * Property multiAccountDeliveryChannelId: Delivery Channel id.
         * <p>
         * @return {@code this}
         * @param multiAccountDeliveryChannelId Property multiAccountDeliveryChannelId: Delivery Channel id. This parameter is required.
         */
        public Builder multiAccountDeliveryChannelId(final com.aliyun.ros.cdk.core.IResolvable multiAccountDeliveryChannelId) {
            this.props.multiAccountDeliveryChannelId(multiAccountDeliveryChannelId);
            return this;
        }

        /**
         * Property resourceChangeDelivery: The configurations for delivery of resource configuration change events.
         * <p>
         * @return {@code this}
         * @param resourceChangeDelivery Property resourceChangeDelivery: The configurations for delivery of resource configuration change events. This parameter is required.
         */
        public Builder resourceChangeDelivery(final com.aliyun.ros.cdk.core.IResolvable resourceChangeDelivery) {
            this.props.resourceChangeDelivery(resourceChangeDelivery);
            return this;
        }
        /**
         * Property resourceChangeDelivery: The configurations for delivery of resource configuration change events.
         * <p>
         * @return {@code this}
         * @param resourceChangeDelivery Property resourceChangeDelivery: The configurations for delivery of resource configuration change events. This parameter is required.
         */
        public Builder resourceChangeDelivery(final com.aliyun.ros.cdk.resourcemanager.RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty resourceChangeDelivery) {
            this.props.resourceChangeDelivery(resourceChangeDelivery);
            return this;
        }

        /**
         * Property resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
         * <p>
         * @return {@code this}
         * @param resourceSnapshotDelivery Property resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots. This parameter is required.
         */
        public Builder resourceSnapshotDelivery(final com.aliyun.ros.cdk.core.IResolvable resourceSnapshotDelivery) {
            this.props.resourceSnapshotDelivery(resourceSnapshotDelivery);
            return this;
        }
        /**
         * Property resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
         * <p>
         * @return {@code this}
         * @param resourceSnapshotDelivery Property resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots. This parameter is required.
         */
        public Builder resourceSnapshotDelivery(final com.aliyun.ros.cdk.resourcemanager.RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty resourceSnapshotDelivery) {
            this.props.resourceSnapshotDelivery(resourceSnapshotDelivery);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.resourcemanager.MultiAccountDeliveryChannel}.
         */
        @Override
        public com.aliyun.ros.cdk.resourcemanager.MultiAccountDeliveryChannel build() {
            return new com.aliyun.ros.cdk.resourcemanager.MultiAccountDeliveryChannel(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
