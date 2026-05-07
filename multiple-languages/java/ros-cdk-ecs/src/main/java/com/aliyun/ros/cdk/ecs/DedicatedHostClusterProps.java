package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>DedicatedHostCluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhostcluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:48.527Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.DedicatedHostClusterProps")
@software.amazon.jsii.Jsii.Proxy(DedicatedHostClusterProps.Jsii$Proxy.class)
public interface DedicatedHostClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dedicatedHostClusterName: The name of the host group.
     * <p>
     * It must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostClusterName() {
        return null;
    }

    /**
     * Property description: The description of the host group.
     * <p>
     * It must be 2 to 256 characters in length, and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property resourceGroupId: The resource group ID of the host group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags of dedicated host cluster.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosDedicatedHostCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property zoneId: The zone ID of the host group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DedicatedHostClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DedicatedHostClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DedicatedHostClusterProps> {
        java.lang.Object dedicatedHostClusterName;
        java.lang.Object description;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.ecs.RosDedicatedHostCluster.TagsProperty> tags;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link DedicatedHostClusterProps#getDedicatedHostClusterName}
         * @param dedicatedHostClusterName Property dedicatedHostClusterName: The name of the host group.
         *                                 It must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
         * @return {@code this}
         */
        public Builder dedicatedHostClusterName(java.lang.String dedicatedHostClusterName) {
            this.dedicatedHostClusterName = dedicatedHostClusterName;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostClusterProps#getDedicatedHostClusterName}
         * @param dedicatedHostClusterName Property dedicatedHostClusterName: The name of the host group.
         *                                 It must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
         * @return {@code this}
         */
        public Builder dedicatedHostClusterName(com.aliyun.ros.cdk.core.IResolvable dedicatedHostClusterName) {
            this.dedicatedHostClusterName = dedicatedHostClusterName;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostClusterProps#getDescription}
         * @param description Property description: The description of the host group.
         *                    It must be 2 to 256 characters in length, and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostClusterProps#getDescription}
         * @param description Property description: The description of the host group.
         *                    It must be 2 to 256 characters in length, and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group ID of the host group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group ID of the host group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostClusterProps#getTags}
         * @param tags Property tags: Tags of dedicated host cluster.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosDedicatedHostCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosDedicatedHostCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostClusterProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the host group.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostClusterProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the host group.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DedicatedHostClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DedicatedHostClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DedicatedHostClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DedicatedHostClusterProps {
        private final java.lang.Object dedicatedHostClusterName;
        private final java.lang.Object description;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosDedicatedHostCluster.TagsProperty> tags;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dedicatedHostClusterName = software.amazon.jsii.Kernel.get(this, "dedicatedHostClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosDedicatedHostCluster.TagsProperty.class)));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dedicatedHostClusterName = builder.dedicatedHostClusterName;
            this.description = builder.description;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosDedicatedHostCluster.TagsProperty>)builder.tags;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getDedicatedHostClusterName() {
            return this.dedicatedHostClusterName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosDedicatedHostCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDedicatedHostClusterName() != null) {
                data.set("dedicatedHostClusterName", om.valueToTree(this.getDedicatedHostClusterName()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.DedicatedHostClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DedicatedHostClusterProps.Jsii$Proxy that = (DedicatedHostClusterProps.Jsii$Proxy) o;

            if (this.dedicatedHostClusterName != null ? !this.dedicatedHostClusterName.equals(that.dedicatedHostClusterName) : that.dedicatedHostClusterName != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dedicatedHostClusterName != null ? this.dedicatedHostClusterName.hashCode() : 0;
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
