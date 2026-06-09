package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a <code>RosMultiAccountDeliveryChannel</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:38:07.304Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannelProps")
@software.amazon.jsii.Jsii.Proxy(RosMultiAccountDeliveryChannelProps.Jsii$Proxy.class)
public interface RosMultiAccountDeliveryChannelProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryChannelDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryChannelFilter();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMultiAccountDeliveryChannelName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiAccountDeliveryChannelId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceChangeDelivery() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceSnapshotDelivery() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosMultiAccountDeliveryChannelProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMultiAccountDeliveryChannelProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMultiAccountDeliveryChannelProps> {
        java.lang.Object deliveryChannelDescription;
        java.lang.Object deliveryChannelFilter;
        java.lang.Object multiAccountDeliveryChannelName;
        java.lang.Object multiAccountDeliveryChannelId;
        java.lang.Object resourceChangeDelivery;
        java.lang.Object resourceSnapshotDelivery;

        /**
         * Sets the value of {@link RosMultiAccountDeliveryChannelProps#getDeliveryChannelDescription}
         * @param deliveryChannelDescription the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryChannelDescription(java.lang.String deliveryChannelDescription) {
            this.deliveryChannelDescription = deliveryChannelDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiAccountDeliveryChannelProps#getDeliveryChannelDescription}
         * @param deliveryChannelDescription the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryChannelDescription(com.aliyun.ros.cdk.core.IResolvable deliveryChannelDescription) {
            this.deliveryChannelDescription = deliveryChannelDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiAccountDeliveryChannelProps#getDeliveryChannelFilter}
         * @param deliveryChannelFilter the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryChannelFilter(com.aliyun.ros.cdk.core.IResolvable deliveryChannelFilter) {
            this.deliveryChannelFilter = deliveryChannelFilter;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiAccountDeliveryChannelProps#getDeliveryChannelFilter}
         * @param deliveryChannelFilter the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryChannelFilter(com.aliyun.ros.cdk.resourcemanager.RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty deliveryChannelFilter) {
            this.deliveryChannelFilter = deliveryChannelFilter;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiAccountDeliveryChannelProps#getMultiAccountDeliveryChannelName}
         * @param multiAccountDeliveryChannelName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder multiAccountDeliveryChannelName(java.lang.String multiAccountDeliveryChannelName) {
            this.multiAccountDeliveryChannelName = multiAccountDeliveryChannelName;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiAccountDeliveryChannelProps#getMultiAccountDeliveryChannelName}
         * @param multiAccountDeliveryChannelName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder multiAccountDeliveryChannelName(com.aliyun.ros.cdk.core.IResolvable multiAccountDeliveryChannelName) {
            this.multiAccountDeliveryChannelName = multiAccountDeliveryChannelName;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiAccountDeliveryChannelProps#getMultiAccountDeliveryChannelId}
         * @param multiAccountDeliveryChannelId the value to be set.
         * @return {@code this}
         */
        public Builder multiAccountDeliveryChannelId(java.lang.String multiAccountDeliveryChannelId) {
            this.multiAccountDeliveryChannelId = multiAccountDeliveryChannelId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiAccountDeliveryChannelProps#getMultiAccountDeliveryChannelId}
         * @param multiAccountDeliveryChannelId the value to be set.
         * @return {@code this}
         */
        public Builder multiAccountDeliveryChannelId(com.aliyun.ros.cdk.core.IResolvable multiAccountDeliveryChannelId) {
            this.multiAccountDeliveryChannelId = multiAccountDeliveryChannelId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiAccountDeliveryChannelProps#getResourceChangeDelivery}
         * @param resourceChangeDelivery the value to be set.
         * @return {@code this}
         */
        public Builder resourceChangeDelivery(com.aliyun.ros.cdk.core.IResolvable resourceChangeDelivery) {
            this.resourceChangeDelivery = resourceChangeDelivery;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiAccountDeliveryChannelProps#getResourceChangeDelivery}
         * @param resourceChangeDelivery the value to be set.
         * @return {@code this}
         */
        public Builder resourceChangeDelivery(com.aliyun.ros.cdk.resourcemanager.RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty resourceChangeDelivery) {
            this.resourceChangeDelivery = resourceChangeDelivery;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiAccountDeliveryChannelProps#getResourceSnapshotDelivery}
         * @param resourceSnapshotDelivery the value to be set.
         * @return {@code this}
         */
        public Builder resourceSnapshotDelivery(com.aliyun.ros.cdk.core.IResolvable resourceSnapshotDelivery) {
            this.resourceSnapshotDelivery = resourceSnapshotDelivery;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiAccountDeliveryChannelProps#getResourceSnapshotDelivery}
         * @param resourceSnapshotDelivery the value to be set.
         * @return {@code this}
         */
        public Builder resourceSnapshotDelivery(com.aliyun.ros.cdk.resourcemanager.RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty resourceSnapshotDelivery) {
            this.resourceSnapshotDelivery = resourceSnapshotDelivery;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMultiAccountDeliveryChannelProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMultiAccountDeliveryChannelProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMultiAccountDeliveryChannelProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMultiAccountDeliveryChannelProps {
        private final java.lang.Object deliveryChannelDescription;
        private final java.lang.Object deliveryChannelFilter;
        private final java.lang.Object multiAccountDeliveryChannelName;
        private final java.lang.Object multiAccountDeliveryChannelId;
        private final java.lang.Object resourceChangeDelivery;
        private final java.lang.Object resourceSnapshotDelivery;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deliveryChannelDescription = software.amazon.jsii.Kernel.get(this, "deliveryChannelDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deliveryChannelFilter = software.amazon.jsii.Kernel.get(this, "deliveryChannelFilter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiAccountDeliveryChannelName = software.amazon.jsii.Kernel.get(this, "multiAccountDeliveryChannelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiAccountDeliveryChannelId = software.amazon.jsii.Kernel.get(this, "multiAccountDeliveryChannelId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceChangeDelivery = software.amazon.jsii.Kernel.get(this, "resourceChangeDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceSnapshotDelivery = software.amazon.jsii.Kernel.get(this, "resourceSnapshotDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deliveryChannelDescription = java.util.Objects.requireNonNull(builder.deliveryChannelDescription, "deliveryChannelDescription is required");
            this.deliveryChannelFilter = java.util.Objects.requireNonNull(builder.deliveryChannelFilter, "deliveryChannelFilter is required");
            this.multiAccountDeliveryChannelName = java.util.Objects.requireNonNull(builder.multiAccountDeliveryChannelName, "multiAccountDeliveryChannelName is required");
            this.multiAccountDeliveryChannelId = builder.multiAccountDeliveryChannelId;
            this.resourceChangeDelivery = builder.resourceChangeDelivery;
            this.resourceSnapshotDelivery = builder.resourceSnapshotDelivery;
        }

        @Override
        public final java.lang.Object getDeliveryChannelDescription() {
            return this.deliveryChannelDescription;
        }

        @Override
        public final java.lang.Object getDeliveryChannelFilter() {
            return this.deliveryChannelFilter;
        }

        @Override
        public final java.lang.Object getMultiAccountDeliveryChannelName() {
            return this.multiAccountDeliveryChannelName;
        }

        @Override
        public final java.lang.Object getMultiAccountDeliveryChannelId() {
            return this.multiAccountDeliveryChannelId;
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

            data.set("deliveryChannelDescription", om.valueToTree(this.getDeliveryChannelDescription()));
            data.set("deliveryChannelFilter", om.valueToTree(this.getDeliveryChannelFilter()));
            data.set("multiAccountDeliveryChannelName", om.valueToTree(this.getMultiAccountDeliveryChannelName()));
            if (this.getMultiAccountDeliveryChannelId() != null) {
                data.set("multiAccountDeliveryChannelId", om.valueToTree(this.getMultiAccountDeliveryChannelId()));
            }
            if (this.getResourceChangeDelivery() != null) {
                data.set("resourceChangeDelivery", om.valueToTree(this.getResourceChangeDelivery()));
            }
            if (this.getResourceSnapshotDelivery() != null) {
                data.set("resourceSnapshotDelivery", om.valueToTree(this.getResourceSnapshotDelivery()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannelProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMultiAccountDeliveryChannelProps.Jsii$Proxy that = (RosMultiAccountDeliveryChannelProps.Jsii$Proxy) o;

            if (!deliveryChannelDescription.equals(that.deliveryChannelDescription)) return false;
            if (!deliveryChannelFilter.equals(that.deliveryChannelFilter)) return false;
            if (!multiAccountDeliveryChannelName.equals(that.multiAccountDeliveryChannelName)) return false;
            if (this.multiAccountDeliveryChannelId != null ? !this.multiAccountDeliveryChannelId.equals(that.multiAccountDeliveryChannelId) : that.multiAccountDeliveryChannelId != null) return false;
            if (this.resourceChangeDelivery != null ? !this.resourceChangeDelivery.equals(that.resourceChangeDelivery) : that.resourceChangeDelivery != null) return false;
            return this.resourceSnapshotDelivery != null ? this.resourceSnapshotDelivery.equals(that.resourceSnapshotDelivery) : that.resourceSnapshotDelivery == null;
        }

        @Override
        public final int hashCode() {
            int result = this.deliveryChannelDescription.hashCode();
            result = 31 * result + (this.deliveryChannelFilter.hashCode());
            result = 31 * result + (this.multiAccountDeliveryChannelName.hashCode());
            result = 31 * result + (this.multiAccountDeliveryChannelId != null ? this.multiAccountDeliveryChannelId.hashCode() : 0);
            result = 31 * result + (this.resourceChangeDelivery != null ? this.resourceChangeDelivery.hashCode() : 0);
            result = 31 * result + (this.resourceSnapshotDelivery != null ? this.resourceSnapshotDelivery.hashCode() : 0);
            return result;
        }
    }
}
