package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a <code>DeliveryChannel</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:38:07.228Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.DeliveryChannelProps")
@software.amazon.jsii.Jsii.Proxy(DeliveryChannelProps.Jsii$Proxy.class)
public interface DeliveryChannelProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property deliveryChannelFilter: The effective scope of the delivery channel.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryChannelFilter();

    /**
     * Property deliveryChannelName: The name of the delivery channel.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryChannelName();

    /**
     * Property deliveryChannelDescription: The description of the delivery channel.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeliveryChannelDescription() {
        return null;
    }

    /**
     * Property deliveryChannelId: The ID of the delivery channel.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeliveryChannelId() {
        return null;
    }

    /**
     * Property enabledResourceChangeDelivery: Enable resource change delivery.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnabledResourceChangeDelivery() {
        return null;
    }

    /**
     * Property enabledResourceSnapshotDelivery: Enable resource snapshot delivery.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnabledResourceSnapshotDelivery() {
        return null;
    }

    /**
     * Property resourceChangeDelivery: The delivery of resource configuration changes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceChangeDelivery() {
        return null;
    }

    /**
     * Property resourceSnapshotDelivery: The scheduled delivery of resource snapshots.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceSnapshotDelivery() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DeliveryChannelProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DeliveryChannelProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DeliveryChannelProps> {
        java.lang.Object deliveryChannelFilter;
        java.lang.Object deliveryChannelName;
        java.lang.Object deliveryChannelDescription;
        java.lang.Object deliveryChannelId;
        java.lang.Object enabledResourceChangeDelivery;
        java.lang.Object enabledResourceSnapshotDelivery;
        java.lang.Object resourceChangeDelivery;
        java.lang.Object resourceSnapshotDelivery;

        /**
         * Sets the value of {@link DeliveryChannelProps#getDeliveryChannelFilter}
         * @param deliveryChannelFilter Property deliveryChannelFilter: The effective scope of the delivery channel. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryChannelFilter(com.aliyun.ros.cdk.core.IResolvable deliveryChannelFilter) {
            this.deliveryChannelFilter = deliveryChannelFilter;
            return this;
        }

        /**
         * Sets the value of {@link DeliveryChannelProps#getDeliveryChannelFilter}
         * @param deliveryChannelFilter Property deliveryChannelFilter: The effective scope of the delivery channel. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryChannelFilter(com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel.DeliveryChannelFilterProperty deliveryChannelFilter) {
            this.deliveryChannelFilter = deliveryChannelFilter;
            return this;
        }

        /**
         * Sets the value of {@link DeliveryChannelProps#getDeliveryChannelName}
         * @param deliveryChannelName Property deliveryChannelName: The name of the delivery channel. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryChannelName(java.lang.String deliveryChannelName) {
            this.deliveryChannelName = deliveryChannelName;
            return this;
        }

        /**
         * Sets the value of {@link DeliveryChannelProps#getDeliveryChannelName}
         * @param deliveryChannelName Property deliveryChannelName: The name of the delivery channel. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryChannelName(com.aliyun.ros.cdk.core.IResolvable deliveryChannelName) {
            this.deliveryChannelName = deliveryChannelName;
            return this;
        }

        /**
         * Sets the value of {@link DeliveryChannelProps#getDeliveryChannelDescription}
         * @param deliveryChannelDescription Property deliveryChannelDescription: The description of the delivery channel.
         * @return {@code this}
         */
        public Builder deliveryChannelDescription(java.lang.String deliveryChannelDescription) {
            this.deliveryChannelDescription = deliveryChannelDescription;
            return this;
        }

        /**
         * Sets the value of {@link DeliveryChannelProps#getDeliveryChannelDescription}
         * @param deliveryChannelDescription Property deliveryChannelDescription: The description of the delivery channel.
         * @return {@code this}
         */
        public Builder deliveryChannelDescription(com.aliyun.ros.cdk.core.IResolvable deliveryChannelDescription) {
            this.deliveryChannelDescription = deliveryChannelDescription;
            return this;
        }

        /**
         * Sets the value of {@link DeliveryChannelProps#getDeliveryChannelId}
         * @param deliveryChannelId Property deliveryChannelId: The ID of the delivery channel.
         * @return {@code this}
         */
        public Builder deliveryChannelId(java.lang.String deliveryChannelId) {
            this.deliveryChannelId = deliveryChannelId;
            return this;
        }

        /**
         * Sets the value of {@link DeliveryChannelProps#getDeliveryChannelId}
         * @param deliveryChannelId Property deliveryChannelId: The ID of the delivery channel.
         * @return {@code this}
         */
        public Builder deliveryChannelId(com.aliyun.ros.cdk.core.IResolvable deliveryChannelId) {
            this.deliveryChannelId = deliveryChannelId;
            return this;
        }

        /**
         * Sets the value of {@link DeliveryChannelProps#getEnabledResourceChangeDelivery}
         * @param enabledResourceChangeDelivery Property enabledResourceChangeDelivery: Enable resource change delivery.
         * @return {@code this}
         */
        public Builder enabledResourceChangeDelivery(java.lang.String enabledResourceChangeDelivery) {
            this.enabledResourceChangeDelivery = enabledResourceChangeDelivery;
            return this;
        }

        /**
         * Sets the value of {@link DeliveryChannelProps#getEnabledResourceChangeDelivery}
         * @param enabledResourceChangeDelivery Property enabledResourceChangeDelivery: Enable resource change delivery.
         * @return {@code this}
         */
        public Builder enabledResourceChangeDelivery(com.aliyun.ros.cdk.core.IResolvable enabledResourceChangeDelivery) {
            this.enabledResourceChangeDelivery = enabledResourceChangeDelivery;
            return this;
        }

        /**
         * Sets the value of {@link DeliveryChannelProps#getEnabledResourceSnapshotDelivery}
         * @param enabledResourceSnapshotDelivery Property enabledResourceSnapshotDelivery: Enable resource snapshot delivery.
         * @return {@code this}
         */
        public Builder enabledResourceSnapshotDelivery(java.lang.String enabledResourceSnapshotDelivery) {
            this.enabledResourceSnapshotDelivery = enabledResourceSnapshotDelivery;
            return this;
        }

        /**
         * Sets the value of {@link DeliveryChannelProps#getEnabledResourceSnapshotDelivery}
         * @param enabledResourceSnapshotDelivery Property enabledResourceSnapshotDelivery: Enable resource snapshot delivery.
         * @return {@code this}
         */
        public Builder enabledResourceSnapshotDelivery(com.aliyun.ros.cdk.core.IResolvable enabledResourceSnapshotDelivery) {
            this.enabledResourceSnapshotDelivery = enabledResourceSnapshotDelivery;
            return this;
        }

        /**
         * Sets the value of {@link DeliveryChannelProps#getResourceChangeDelivery}
         * @param resourceChangeDelivery Property resourceChangeDelivery: The delivery of resource configuration changes.
         * @return {@code this}
         */
        public Builder resourceChangeDelivery(com.aliyun.ros.cdk.core.IResolvable resourceChangeDelivery) {
            this.resourceChangeDelivery = resourceChangeDelivery;
            return this;
        }

        /**
         * Sets the value of {@link DeliveryChannelProps#getResourceChangeDelivery}
         * @param resourceChangeDelivery Property resourceChangeDelivery: The delivery of resource configuration changes.
         * @return {@code this}
         */
        public Builder resourceChangeDelivery(com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel.ResourceChangeDeliveryProperty resourceChangeDelivery) {
            this.resourceChangeDelivery = resourceChangeDelivery;
            return this;
        }

        /**
         * Sets the value of {@link DeliveryChannelProps#getResourceSnapshotDelivery}
         * @param resourceSnapshotDelivery Property resourceSnapshotDelivery: The scheduled delivery of resource snapshots.
         * @return {@code this}
         */
        public Builder resourceSnapshotDelivery(com.aliyun.ros.cdk.core.IResolvable resourceSnapshotDelivery) {
            this.resourceSnapshotDelivery = resourceSnapshotDelivery;
            return this;
        }

        /**
         * Sets the value of {@link DeliveryChannelProps#getResourceSnapshotDelivery}
         * @param resourceSnapshotDelivery Property resourceSnapshotDelivery: The scheduled delivery of resource snapshots.
         * @return {@code this}
         */
        public Builder resourceSnapshotDelivery(com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliveryProperty resourceSnapshotDelivery) {
            this.resourceSnapshotDelivery = resourceSnapshotDelivery;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DeliveryChannelProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DeliveryChannelProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DeliveryChannelProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeliveryChannelProps {
        private final java.lang.Object deliveryChannelFilter;
        private final java.lang.Object deliveryChannelName;
        private final java.lang.Object deliveryChannelDescription;
        private final java.lang.Object deliveryChannelId;
        private final java.lang.Object enabledResourceChangeDelivery;
        private final java.lang.Object enabledResourceSnapshotDelivery;
        private final java.lang.Object resourceChangeDelivery;
        private final java.lang.Object resourceSnapshotDelivery;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deliveryChannelFilter = software.amazon.jsii.Kernel.get(this, "deliveryChannelFilter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deliveryChannelName = software.amazon.jsii.Kernel.get(this, "deliveryChannelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deliveryChannelDescription = software.amazon.jsii.Kernel.get(this, "deliveryChannelDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deliveryChannelId = software.amazon.jsii.Kernel.get(this, "deliveryChannelId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enabledResourceChangeDelivery = software.amazon.jsii.Kernel.get(this, "enabledResourceChangeDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enabledResourceSnapshotDelivery = software.amazon.jsii.Kernel.get(this, "enabledResourceSnapshotDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceChangeDelivery = software.amazon.jsii.Kernel.get(this, "resourceChangeDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceSnapshotDelivery = software.amazon.jsii.Kernel.get(this, "resourceSnapshotDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deliveryChannelFilter = java.util.Objects.requireNonNull(builder.deliveryChannelFilter, "deliveryChannelFilter is required");
            this.deliveryChannelName = java.util.Objects.requireNonNull(builder.deliveryChannelName, "deliveryChannelName is required");
            this.deliveryChannelDescription = builder.deliveryChannelDescription;
            this.deliveryChannelId = builder.deliveryChannelId;
            this.enabledResourceChangeDelivery = builder.enabledResourceChangeDelivery;
            this.enabledResourceSnapshotDelivery = builder.enabledResourceSnapshotDelivery;
            this.resourceChangeDelivery = builder.resourceChangeDelivery;
            this.resourceSnapshotDelivery = builder.resourceSnapshotDelivery;
        }

        @Override
        public final java.lang.Object getDeliveryChannelFilter() {
            return this.deliveryChannelFilter;
        }

        @Override
        public final java.lang.Object getDeliveryChannelName() {
            return this.deliveryChannelName;
        }

        @Override
        public final java.lang.Object getDeliveryChannelDescription() {
            return this.deliveryChannelDescription;
        }

        @Override
        public final java.lang.Object getDeliveryChannelId() {
            return this.deliveryChannelId;
        }

        @Override
        public final java.lang.Object getEnabledResourceChangeDelivery() {
            return this.enabledResourceChangeDelivery;
        }

        @Override
        public final java.lang.Object getEnabledResourceSnapshotDelivery() {
            return this.enabledResourceSnapshotDelivery;
        }

        @Override
        public final java.lang.Object getResourceChangeDelivery() {
            return this.resourceChangeDelivery;
        }

        @Override
        public final java.lang.Object getResourceSnapshotDelivery() {
            return this.resourceSnapshotDelivery;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("deliveryChannelFilter", om.valueToTree(this.getDeliveryChannelFilter()));
            data.set("deliveryChannelName", om.valueToTree(this.getDeliveryChannelName()));
            if (this.getDeliveryChannelDescription() != null) {
                data.set("deliveryChannelDescription", om.valueToTree(this.getDeliveryChannelDescription()));
            }
            if (this.getDeliveryChannelId() != null) {
                data.set("deliveryChannelId", om.valueToTree(this.getDeliveryChannelId()));
            }
            if (this.getEnabledResourceChangeDelivery() != null) {
                data.set("enabledResourceChangeDelivery", om.valueToTree(this.getEnabledResourceChangeDelivery()));
            }
            if (this.getEnabledResourceSnapshotDelivery() != null) {
                data.set("enabledResourceSnapshotDelivery", om.valueToTree(this.getEnabledResourceSnapshotDelivery()));
            }
            if (this.getResourceChangeDelivery() != null) {
                data.set("resourceChangeDelivery", om.valueToTree(this.getResourceChangeDelivery()));
            }
            if (this.getResourceSnapshotDelivery() != null) {
                data.set("resourceSnapshotDelivery", om.valueToTree(this.getResourceSnapshotDelivery()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.DeliveryChannelProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DeliveryChannelProps.Jsii$Proxy that = (DeliveryChannelProps.Jsii$Proxy) o;

            if (!deliveryChannelFilter.equals(that.deliveryChannelFilter)) return false;
            if (!deliveryChannelName.equals(that.deliveryChannelName)) return false;
            if (this.deliveryChannelDescription != null ? !this.deliveryChannelDescription.equals(that.deliveryChannelDescription) : that.deliveryChannelDescription != null) return false;
            if (this.deliveryChannelId != null ? !this.deliveryChannelId.equals(that.deliveryChannelId) : that.deliveryChannelId != null) return false;
            if (this.enabledResourceChangeDelivery != null ? !this.enabledResourceChangeDelivery.equals(that.enabledResourceChangeDelivery) : that.enabledResourceChangeDelivery != null) return false;
            if (this.enabledResourceSnapshotDelivery != null ? !this.enabledResourceSnapshotDelivery.equals(that.enabledResourceSnapshotDelivery) : that.enabledResourceSnapshotDelivery != null) return false;
            if (this.resourceChangeDelivery != null ? !this.resourceChangeDelivery.equals(that.resourceChangeDelivery) : that.resourceChangeDelivery != null) return false;
            return this.resourceSnapshotDelivery != null ? this.resourceSnapshotDelivery.equals(that.resourceSnapshotDelivery) : that.resourceSnapshotDelivery == null;
        }

        @Override
        public final int hashCode() {
            int result = this.deliveryChannelFilter.hashCode();
            result = 31 * result + (this.deliveryChannelName.hashCode());
            result = 31 * result + (this.deliveryChannelDescription != null ? this.deliveryChannelDescription.hashCode() : 0);
            result = 31 * result + (this.deliveryChannelId != null ? this.deliveryChannelId.hashCode() : 0);
            result = 31 * result + (this.enabledResourceChangeDelivery != null ? this.enabledResourceChangeDelivery.hashCode() : 0);
            result = 31 * result + (this.enabledResourceSnapshotDelivery != null ? this.enabledResourceSnapshotDelivery.hashCode() : 0);
            result = 31 * result + (this.resourceChangeDelivery != null ? this.resourceChangeDelivery.hashCode() : 0);
            result = 31 * result + (this.resourceSnapshotDelivery != null ? this.resourceSnapshotDelivery.hashCode() : 0);
            return result;
        }
    }
}
