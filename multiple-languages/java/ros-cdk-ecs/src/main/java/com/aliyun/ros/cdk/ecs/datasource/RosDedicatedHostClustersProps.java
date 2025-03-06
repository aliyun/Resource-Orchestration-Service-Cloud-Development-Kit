package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>RosDedicatedHostClusters</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostclusters
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:05.723Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.RosDedicatedHostClustersProps")
@software.amazon.jsii.Jsii.Proxy(RosDedicatedHostClustersProps.Jsii$Proxy.class)
public interface RosDedicatedHostClustersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostClusterName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDedicatedHostClustersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDedicatedHostClustersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDedicatedHostClustersProps> {
        java.lang.Object dedicatedHostClusterName;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosDedicatedHostClustersProps#getDedicatedHostClusterName}
         * @param dedicatedHostClusterName the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostClusterName(java.lang.String dedicatedHostClusterName) {
            this.dedicatedHostClusterName = dedicatedHostClusterName;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostClustersProps#getDedicatedHostClusterName}
         * @param dedicatedHostClusterName the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostClusterName(com.aliyun.ros.cdk.core.IResolvable dedicatedHostClusterName) {
            this.dedicatedHostClusterName = dedicatedHostClusterName;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostClustersProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostClustersProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostClustersProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostClustersProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostClustersProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostClustersProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDedicatedHostClustersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDedicatedHostClustersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDedicatedHostClustersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDedicatedHostClustersProps {
        private final java.lang.Object dedicatedHostClusterName;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dedicatedHostClusterName = software.amazon.jsii.Kernel.get(this, "dedicatedHostClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dedicatedHostClusterName = builder.dedicatedHostClusterName;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getDedicatedHostClusterName() {
            return this.dedicatedHostClusterName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
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
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.RosDedicatedHostClustersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDedicatedHostClustersProps.Jsii$Proxy that = (RosDedicatedHostClustersProps.Jsii$Proxy) o;

            if (this.dedicatedHostClusterName != null ? !this.dedicatedHostClusterName.equals(that.dedicatedHostClusterName) : that.dedicatedHostClusterName != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dedicatedHostClusterName != null ? this.dedicatedHostClusterName.hashCode() : 0;
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
