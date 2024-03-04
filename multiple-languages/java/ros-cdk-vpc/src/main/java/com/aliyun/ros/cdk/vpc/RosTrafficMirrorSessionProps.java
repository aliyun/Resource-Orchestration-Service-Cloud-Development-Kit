package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosTrafficMirrorSession</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsession
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:55.054Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosTrafficMirrorSessionProps")
@software.amazon.jsii.Jsii.Proxy(RosTrafficMirrorSessionProps.Jsii$Proxy.class)
public interface RosTrafficMirrorSessionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPriority();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTrafficMirrorFilterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTrafficMirrorSourceIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTrafficMirrorTargetId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTrafficMirrorTargetType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPacketLength() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTag() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrafficMirrorSessionDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrafficMirrorSessionName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVirtualNetworkId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTrafficMirrorSessionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTrafficMirrorSessionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTrafficMirrorSessionProps> {
        java.lang.Object priority;
        java.lang.Object trafficMirrorFilterId;
        java.lang.Object trafficMirrorSourceIds;
        java.lang.Object trafficMirrorTargetId;
        java.lang.Object trafficMirrorTargetType;
        java.lang.Object enabled;
        java.lang.Object packetLength;
        java.lang.Object resourceGroupId;
        java.lang.Object tag;
        java.lang.Object trafficMirrorSessionDescription;
        java.lang.Object trafficMirrorSessionName;
        java.lang.Object virtualNetworkId;

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getPriority}
         * @param priority the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getPriority}
         * @param priority the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getTrafficMirrorFilterId}
         * @param trafficMirrorFilterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficMirrorFilterId(java.lang.String trafficMirrorFilterId) {
            this.trafficMirrorFilterId = trafficMirrorFilterId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getTrafficMirrorFilterId}
         * @param trafficMirrorFilterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficMirrorFilterId(com.aliyun.ros.cdk.core.IResolvable trafficMirrorFilterId) {
            this.trafficMirrorFilterId = trafficMirrorFilterId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getTrafficMirrorSourceIds}
         * @param trafficMirrorSourceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficMirrorSourceIds(com.aliyun.ros.cdk.core.IResolvable trafficMirrorSourceIds) {
            this.trafficMirrorSourceIds = trafficMirrorSourceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getTrafficMirrorSourceIds}
         * @param trafficMirrorSourceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficMirrorSourceIds(java.util.List<? extends java.lang.Object> trafficMirrorSourceIds) {
            this.trafficMirrorSourceIds = trafficMirrorSourceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getTrafficMirrorTargetId}
         * @param trafficMirrorTargetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficMirrorTargetId(java.lang.String trafficMirrorTargetId) {
            this.trafficMirrorTargetId = trafficMirrorTargetId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getTrafficMirrorTargetId}
         * @param trafficMirrorTargetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficMirrorTargetId(com.aliyun.ros.cdk.core.IResolvable trafficMirrorTargetId) {
            this.trafficMirrorTargetId = trafficMirrorTargetId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getTrafficMirrorTargetType}
         * @param trafficMirrorTargetType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficMirrorTargetType(java.lang.String trafficMirrorTargetType) {
            this.trafficMirrorTargetType = trafficMirrorTargetType;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getTrafficMirrorTargetType}
         * @param trafficMirrorTargetType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficMirrorTargetType(com.aliyun.ros.cdk.core.IResolvable trafficMirrorTargetType) {
            this.trafficMirrorTargetType = trafficMirrorTargetType;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getEnabled}
         * @param enabled the value to be set.
         * @return {@code this}
         */
        public Builder enabled(java.lang.Boolean enabled) {
            this.enabled = enabled;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getEnabled}
         * @param enabled the value to be set.
         * @return {@code this}
         */
        public Builder enabled(com.aliyun.ros.cdk.core.IResolvable enabled) {
            this.enabled = enabled;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getPacketLength}
         * @param packetLength the value to be set.
         * @return {@code this}
         */
        public Builder packetLength(java.lang.Number packetLength) {
            this.packetLength = packetLength;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getPacketLength}
         * @param packetLength the value to be set.
         * @return {@code this}
         */
        public Builder packetLength(com.aliyun.ros.cdk.core.IResolvable packetLength) {
            this.packetLength = packetLength;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getTag}
         * @param tag the value to be set.
         * @return {@code this}
         */
        public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getTag}
         * @param tag the value to be set.
         * @return {@code this}
         */
        public Builder tag(java.util.List<? extends java.lang.Object> tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getTrafficMirrorSessionDescription}
         * @param trafficMirrorSessionDescription the value to be set.
         * @return {@code this}
         */
        public Builder trafficMirrorSessionDescription(java.lang.String trafficMirrorSessionDescription) {
            this.trafficMirrorSessionDescription = trafficMirrorSessionDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getTrafficMirrorSessionDescription}
         * @param trafficMirrorSessionDescription the value to be set.
         * @return {@code this}
         */
        public Builder trafficMirrorSessionDescription(com.aliyun.ros.cdk.core.IResolvable trafficMirrorSessionDescription) {
            this.trafficMirrorSessionDescription = trafficMirrorSessionDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getTrafficMirrorSessionName}
         * @param trafficMirrorSessionName the value to be set.
         * @return {@code this}
         */
        public Builder trafficMirrorSessionName(java.lang.String trafficMirrorSessionName) {
            this.trafficMirrorSessionName = trafficMirrorSessionName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getTrafficMirrorSessionName}
         * @param trafficMirrorSessionName the value to be set.
         * @return {@code this}
         */
        public Builder trafficMirrorSessionName(com.aliyun.ros.cdk.core.IResolvable trafficMirrorSessionName) {
            this.trafficMirrorSessionName = trafficMirrorSessionName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getVirtualNetworkId}
         * @param virtualNetworkId the value to be set.
         * @return {@code this}
         */
        public Builder virtualNetworkId(java.lang.Number virtualNetworkId) {
            this.virtualNetworkId = virtualNetworkId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionProps#getVirtualNetworkId}
         * @param virtualNetworkId the value to be set.
         * @return {@code this}
         */
        public Builder virtualNetworkId(com.aliyun.ros.cdk.core.IResolvable virtualNetworkId) {
            this.virtualNetworkId = virtualNetworkId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTrafficMirrorSessionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTrafficMirrorSessionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTrafficMirrorSessionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTrafficMirrorSessionProps {
        private final java.lang.Object priority;
        private final java.lang.Object trafficMirrorFilterId;
        private final java.lang.Object trafficMirrorSourceIds;
        private final java.lang.Object trafficMirrorTargetId;
        private final java.lang.Object trafficMirrorTargetType;
        private final java.lang.Object enabled;
        private final java.lang.Object packetLength;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object tag;
        private final java.lang.Object trafficMirrorSessionDescription;
        private final java.lang.Object trafficMirrorSessionName;
        private final java.lang.Object virtualNetworkId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficMirrorFilterId = software.amazon.jsii.Kernel.get(this, "trafficMirrorFilterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficMirrorSourceIds = software.amazon.jsii.Kernel.get(this, "trafficMirrorSourceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficMirrorTargetId = software.amazon.jsii.Kernel.get(this, "trafficMirrorTargetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficMirrorTargetType = software.amazon.jsii.Kernel.get(this, "trafficMirrorTargetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enabled = software.amazon.jsii.Kernel.get(this, "enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.packetLength = software.amazon.jsii.Kernel.get(this, "packetLength", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tag = software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficMirrorSessionDescription = software.amazon.jsii.Kernel.get(this, "trafficMirrorSessionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficMirrorSessionName = software.amazon.jsii.Kernel.get(this, "trafficMirrorSessionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.virtualNetworkId = software.amazon.jsii.Kernel.get(this, "virtualNetworkId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.priority = java.util.Objects.requireNonNull(builder.priority, "priority is required");
            this.trafficMirrorFilterId = java.util.Objects.requireNonNull(builder.trafficMirrorFilterId, "trafficMirrorFilterId is required");
            this.trafficMirrorSourceIds = java.util.Objects.requireNonNull(builder.trafficMirrorSourceIds, "trafficMirrorSourceIds is required");
            this.trafficMirrorTargetId = java.util.Objects.requireNonNull(builder.trafficMirrorTargetId, "trafficMirrorTargetId is required");
            this.trafficMirrorTargetType = java.util.Objects.requireNonNull(builder.trafficMirrorTargetType, "trafficMirrorTargetType is required");
            this.enabled = builder.enabled;
            this.packetLength = builder.packetLength;
            this.resourceGroupId = builder.resourceGroupId;
            this.tag = builder.tag;
            this.trafficMirrorSessionDescription = builder.trafficMirrorSessionDescription;
            this.trafficMirrorSessionName = builder.trafficMirrorSessionName;
            this.virtualNetworkId = builder.virtualNetworkId;
        }

        @Override
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.Object getTrafficMirrorFilterId() {
            return this.trafficMirrorFilterId;
        }

        @Override
        public final java.lang.Object getTrafficMirrorSourceIds() {
            return this.trafficMirrorSourceIds;
        }

        @Override
        public final java.lang.Object getTrafficMirrorTargetId() {
            return this.trafficMirrorTargetId;
        }

        @Override
        public final java.lang.Object getTrafficMirrorTargetType() {
            return this.trafficMirrorTargetType;
        }

        @Override
        public final java.lang.Object getEnabled() {
            return this.enabled;
        }

        @Override
        public final java.lang.Object getPacketLength() {
            return this.packetLength;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getTag() {
            return this.tag;
        }

        @Override
        public final java.lang.Object getTrafficMirrorSessionDescription() {
            return this.trafficMirrorSessionDescription;
        }

        @Override
        public final java.lang.Object getTrafficMirrorSessionName() {
            return this.trafficMirrorSessionName;
        }

        @Override
        public final java.lang.Object getVirtualNetworkId() {
            return this.virtualNetworkId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("priority", om.valueToTree(this.getPriority()));
            data.set("trafficMirrorFilterId", om.valueToTree(this.getTrafficMirrorFilterId()));
            data.set("trafficMirrorSourceIds", om.valueToTree(this.getTrafficMirrorSourceIds()));
            data.set("trafficMirrorTargetId", om.valueToTree(this.getTrafficMirrorTargetId()));
            data.set("trafficMirrorTargetType", om.valueToTree(this.getTrafficMirrorTargetType()));
            if (this.getEnabled() != null) {
                data.set("enabled", om.valueToTree(this.getEnabled()));
            }
            if (this.getPacketLength() != null) {
                data.set("packetLength", om.valueToTree(this.getPacketLength()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTag() != null) {
                data.set("tag", om.valueToTree(this.getTag()));
            }
            if (this.getTrafficMirrorSessionDescription() != null) {
                data.set("trafficMirrorSessionDescription", om.valueToTree(this.getTrafficMirrorSessionDescription()));
            }
            if (this.getTrafficMirrorSessionName() != null) {
                data.set("trafficMirrorSessionName", om.valueToTree(this.getTrafficMirrorSessionName()));
            }
            if (this.getVirtualNetworkId() != null) {
                data.set("virtualNetworkId", om.valueToTree(this.getVirtualNetworkId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosTrafficMirrorSessionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTrafficMirrorSessionProps.Jsii$Proxy that = (RosTrafficMirrorSessionProps.Jsii$Proxy) o;

            if (!priority.equals(that.priority)) return false;
            if (!trafficMirrorFilterId.equals(that.trafficMirrorFilterId)) return false;
            if (!trafficMirrorSourceIds.equals(that.trafficMirrorSourceIds)) return false;
            if (!trafficMirrorTargetId.equals(that.trafficMirrorTargetId)) return false;
            if (!trafficMirrorTargetType.equals(that.trafficMirrorTargetType)) return false;
            if (this.enabled != null ? !this.enabled.equals(that.enabled) : that.enabled != null) return false;
            if (this.packetLength != null ? !this.packetLength.equals(that.packetLength) : that.packetLength != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tag != null ? !this.tag.equals(that.tag) : that.tag != null) return false;
            if (this.trafficMirrorSessionDescription != null ? !this.trafficMirrorSessionDescription.equals(that.trafficMirrorSessionDescription) : that.trafficMirrorSessionDescription != null) return false;
            if (this.trafficMirrorSessionName != null ? !this.trafficMirrorSessionName.equals(that.trafficMirrorSessionName) : that.trafficMirrorSessionName != null) return false;
            return this.virtualNetworkId != null ? this.virtualNetworkId.equals(that.virtualNetworkId) : that.virtualNetworkId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.priority.hashCode();
            result = 31 * result + (this.trafficMirrorFilterId.hashCode());
            result = 31 * result + (this.trafficMirrorSourceIds.hashCode());
            result = 31 * result + (this.trafficMirrorTargetId.hashCode());
            result = 31 * result + (this.trafficMirrorTargetType.hashCode());
            result = 31 * result + (this.enabled != null ? this.enabled.hashCode() : 0);
            result = 31 * result + (this.packetLength != null ? this.packetLength.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tag != null ? this.tag.hashCode() : 0);
            result = 31 * result + (this.trafficMirrorSessionDescription != null ? this.trafficMirrorSessionDescription.hashCode() : 0);
            result = 31 * result + (this.trafficMirrorSessionName != null ? this.trafficMirrorSessionName.hashCode() : 0);
            result = 31 * result + (this.virtualNetworkId != null ? this.virtualNetworkId.hashCode() : 0);
            return result;
        }
    }
}
