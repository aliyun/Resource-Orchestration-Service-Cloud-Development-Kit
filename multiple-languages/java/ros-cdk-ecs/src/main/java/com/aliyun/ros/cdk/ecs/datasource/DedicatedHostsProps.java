package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>DedicatedHosts</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhosts
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.665Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.DedicatedHostsProps")
@software.amazon.jsii.Jsii.Proxy(DedicatedHostsProps.Jsii$Proxy.class)
public interface DedicatedHostsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dedicatedHostClusterId: The ID of the dedicated host cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostClusterId() {
        return null;
    }

    /**
     * Property dedicatedHostIds: The IDs of the dedicated hosts.
     * <p>
     * You can specify up to 100 dedicated host IDs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostIds() {
        return null;
    }

    /**
     * Property dedicatedHostName: The name of the dedicated host.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostName() {
        return null;
    }

    /**
     * Property dedicatedHostType: The type of the dedicated host.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostType() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the dedicated host belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property status: The service status of the dedicated host.
     * <p>
     * Valid values:
     * Available: The dedicated host is running normally.
     * UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
     * PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
     * Default value: Available.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * Property tags: Tags of ddh.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosDedicatedHosts.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property zoneId: The zone ID of the dedicated host.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DedicatedHostsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DedicatedHostsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DedicatedHostsProps> {
        java.lang.Object dedicatedHostClusterId;
        java.lang.Object dedicatedHostIds;
        java.lang.Object dedicatedHostName;
        java.lang.Object dedicatedHostType;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;
        java.lang.Object status;
        java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosDedicatedHosts.TagsProperty> tags;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link DedicatedHostsProps#getDedicatedHostClusterId}
         * @param dedicatedHostClusterId Property dedicatedHostClusterId: The ID of the dedicated host cluster.
         * @return {@code this}
         */
        public Builder dedicatedHostClusterId(java.lang.String dedicatedHostClusterId) {
            this.dedicatedHostClusterId = dedicatedHostClusterId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getDedicatedHostClusterId}
         * @param dedicatedHostClusterId Property dedicatedHostClusterId: The ID of the dedicated host cluster.
         * @return {@code this}
         */
        public Builder dedicatedHostClusterId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostClusterId) {
            this.dedicatedHostClusterId = dedicatedHostClusterId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getDedicatedHostIds}
         * @param dedicatedHostIds Property dedicatedHostIds: The IDs of the dedicated hosts.
         *                         You can specify up to 100 dedicated host IDs.
         * @return {@code this}
         */
        public Builder dedicatedHostIds(com.aliyun.ros.cdk.core.IResolvable dedicatedHostIds) {
            this.dedicatedHostIds = dedicatedHostIds;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getDedicatedHostIds}
         * @param dedicatedHostIds Property dedicatedHostIds: The IDs of the dedicated hosts.
         *                         You can specify up to 100 dedicated host IDs.
         * @return {@code this}
         */
        public Builder dedicatedHostIds(java.util.List<? extends java.lang.Object> dedicatedHostIds) {
            this.dedicatedHostIds = dedicatedHostIds;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getDedicatedHostName}
         * @param dedicatedHostName Property dedicatedHostName: The name of the dedicated host.
         * @return {@code this}
         */
        public Builder dedicatedHostName(java.lang.String dedicatedHostName) {
            this.dedicatedHostName = dedicatedHostName;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getDedicatedHostName}
         * @param dedicatedHostName Property dedicatedHostName: The name of the dedicated host.
         * @return {@code this}
         */
        public Builder dedicatedHostName(com.aliyun.ros.cdk.core.IResolvable dedicatedHostName) {
            this.dedicatedHostName = dedicatedHostName;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getDedicatedHostType}
         * @param dedicatedHostType Property dedicatedHostType: The type of the dedicated host.
         * @return {@code this}
         */
        public Builder dedicatedHostType(java.lang.String dedicatedHostType) {
            this.dedicatedHostType = dedicatedHostType;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getDedicatedHostType}
         * @param dedicatedHostType Property dedicatedHostType: The type of the dedicated host.
         * @return {@code this}
         */
        public Builder dedicatedHostType(com.aliyun.ros.cdk.core.IResolvable dedicatedHostType) {
            this.dedicatedHostType = dedicatedHostType;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the dedicated host belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the dedicated host belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getStatus}
         * @param status Property status: The service status of the dedicated host.
         *               Valid values:
         *               Available: The dedicated host is running normally.
         *               UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
         *               PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
         *               Default value: Available.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getStatus}
         * @param status Property status: The service status of the dedicated host.
         *               Valid values:
         *               Available: The dedicated host is running normally.
         *               UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
         *               PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
         *               Default value: Available.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getTags}
         * @param tags Property tags: Tags of ddh.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosDedicatedHosts.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosDedicatedHosts.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the dedicated host.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostsProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the dedicated host.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DedicatedHostsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DedicatedHostsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DedicatedHostsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DedicatedHostsProps {
        private final java.lang.Object dedicatedHostClusterId;
        private final java.lang.Object dedicatedHostIds;
        private final java.lang.Object dedicatedHostName;
        private final java.lang.Object dedicatedHostType;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object status;
        private final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosDedicatedHosts.TagsProperty> tags;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dedicatedHostClusterId = software.amazon.jsii.Kernel.get(this, "dedicatedHostClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostIds = software.amazon.jsii.Kernel.get(this, "dedicatedHostIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostName = software.amazon.jsii.Kernel.get(this, "dedicatedHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostType = software.amazon.jsii.Kernel.get(this, "dedicatedHostType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.RosDedicatedHosts.TagsProperty.class)));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dedicatedHostClusterId = builder.dedicatedHostClusterId;
            this.dedicatedHostIds = builder.dedicatedHostIds;
            this.dedicatedHostName = builder.dedicatedHostName;
            this.dedicatedHostType = builder.dedicatedHostType;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
            this.status = builder.status;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosDedicatedHosts.TagsProperty>)builder.tags;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getDedicatedHostClusterId() {
            return this.dedicatedHostClusterId;
        }

        @Override
        public final java.lang.Object getDedicatedHostIds() {
            return this.dedicatedHostIds;
        }

        @Override
        public final java.lang.Object getDedicatedHostName() {
            return this.dedicatedHostName;
        }

        @Override
        public final java.lang.Object getDedicatedHostType() {
            return this.dedicatedHostType;
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
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosDedicatedHosts.TagsProperty> getTags() {
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

            if (this.getDedicatedHostClusterId() != null) {
                data.set("dedicatedHostClusterId", om.valueToTree(this.getDedicatedHostClusterId()));
            }
            if (this.getDedicatedHostIds() != null) {
                data.set("dedicatedHostIds", om.valueToTree(this.getDedicatedHostIds()));
            }
            if (this.getDedicatedHostName() != null) {
                data.set("dedicatedHostName", om.valueToTree(this.getDedicatedHostName()));
            }
            if (this.getDedicatedHostType() != null) {
                data.set("dedicatedHostType", om.valueToTree(this.getDedicatedHostType()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.DedicatedHostsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DedicatedHostsProps.Jsii$Proxy that = (DedicatedHostsProps.Jsii$Proxy) o;

            if (this.dedicatedHostClusterId != null ? !this.dedicatedHostClusterId.equals(that.dedicatedHostClusterId) : that.dedicatedHostClusterId != null) return false;
            if (this.dedicatedHostIds != null ? !this.dedicatedHostIds.equals(that.dedicatedHostIds) : that.dedicatedHostIds != null) return false;
            if (this.dedicatedHostName != null ? !this.dedicatedHostName.equals(that.dedicatedHostName) : that.dedicatedHostName != null) return false;
            if (this.dedicatedHostType != null ? !this.dedicatedHostType.equals(that.dedicatedHostType) : that.dedicatedHostType != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dedicatedHostClusterId != null ? this.dedicatedHostClusterId.hashCode() : 0;
            result = 31 * result + (this.dedicatedHostIds != null ? this.dedicatedHostIds.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostName != null ? this.dedicatedHostName.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostType != null ? this.dedicatedHostType.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
