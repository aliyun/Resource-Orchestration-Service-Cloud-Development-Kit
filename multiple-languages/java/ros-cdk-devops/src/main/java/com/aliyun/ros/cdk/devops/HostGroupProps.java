package com.aliyun.ros.cdk.devops;

/**
 * Properties for defining a <code>HostGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-hostgroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.462Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.devops.$Module.class, fqn = "@alicloud/ros-cdk-devops.HostGroupProps")
@software.amazon.jsii.Jsii.Proxy(HostGroupProps.Jsii$Proxy.class)
public interface HostGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: Host group name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOrganizationId();

    /**
     * Property serviceConnectionId: Service connection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceConnectionId();

    /**
     * Property aliyunRegion: The aliyun region.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAliyunRegion() {
        return null;
    }

    /**
     * Property ecsLabelKey: The tag key of the ECS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsLabelKey() {
        return null;
    }

    /**
     * Property ecsLabelValue: The tag value of the ECS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsLabelValue() {
        return null;
    }

    /**
     * Property ecsType: The type of ECS, currently only supports ECS_ALIYUN.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsType() {
        return null;
    }

    /**
     * Property envId: Environment id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnvId() {
        return null;
    }

    /**
     * Property machineInfos: The machine infos.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMachineInfos() {
        return null;
    }

    /**
     * Property tagIds: The ids of tag.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagIds() {
        return null;
    }

    /**
     * Property type: Host group type, currently only supports ECS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HostGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HostGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HostGroupProps> {
        java.lang.Object name;
        java.lang.Object organizationId;
        java.lang.Object serviceConnectionId;
        java.lang.Object aliyunRegion;
        java.lang.Object ecsLabelKey;
        java.lang.Object ecsLabelValue;
        java.lang.Object ecsType;
        java.lang.Object envId;
        java.lang.Object machineInfos;
        java.lang.Object tagIds;
        java.lang.Object type;

        /**
         * Sets the value of {@link HostGroupProps#getName}
         * @param name Property name: Host group name. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getName}
         * @param name Property name: Host group name. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getOrganizationId}
         * @param organizationId Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links. This parameter is required.
         * @return {@code this}
         */
        public Builder organizationId(java.lang.String organizationId) {
            this.organizationId = organizationId;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getOrganizationId}
         * @param organizationId Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links. This parameter is required.
         * @return {@code this}
         */
        public Builder organizationId(com.aliyun.ros.cdk.core.IResolvable organizationId) {
            this.organizationId = organizationId;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getServiceConnectionId}
         * @param serviceConnectionId Property serviceConnectionId: Service connection. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceConnectionId(java.lang.Number serviceConnectionId) {
            this.serviceConnectionId = serviceConnectionId;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getServiceConnectionId}
         * @param serviceConnectionId Property serviceConnectionId: Service connection. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceConnectionId(com.aliyun.ros.cdk.core.IResolvable serviceConnectionId) {
            this.serviceConnectionId = serviceConnectionId;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getAliyunRegion}
         * @param aliyunRegion Property aliyunRegion: The aliyun region.
         * @return {@code this}
         */
        public Builder aliyunRegion(java.lang.String aliyunRegion) {
            this.aliyunRegion = aliyunRegion;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getAliyunRegion}
         * @param aliyunRegion Property aliyunRegion: The aliyun region.
         * @return {@code this}
         */
        public Builder aliyunRegion(com.aliyun.ros.cdk.core.IResolvable aliyunRegion) {
            this.aliyunRegion = aliyunRegion;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getEcsLabelKey}
         * @param ecsLabelKey Property ecsLabelKey: The tag key of the ECS.
         * @return {@code this}
         */
        public Builder ecsLabelKey(java.lang.String ecsLabelKey) {
            this.ecsLabelKey = ecsLabelKey;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getEcsLabelKey}
         * @param ecsLabelKey Property ecsLabelKey: The tag key of the ECS.
         * @return {@code this}
         */
        public Builder ecsLabelKey(com.aliyun.ros.cdk.core.IResolvable ecsLabelKey) {
            this.ecsLabelKey = ecsLabelKey;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getEcsLabelValue}
         * @param ecsLabelValue Property ecsLabelValue: The tag value of the ECS.
         * @return {@code this}
         */
        public Builder ecsLabelValue(java.lang.String ecsLabelValue) {
            this.ecsLabelValue = ecsLabelValue;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getEcsLabelValue}
         * @param ecsLabelValue Property ecsLabelValue: The tag value of the ECS.
         * @return {@code this}
         */
        public Builder ecsLabelValue(com.aliyun.ros.cdk.core.IResolvable ecsLabelValue) {
            this.ecsLabelValue = ecsLabelValue;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getEcsType}
         * @param ecsType Property ecsType: The type of ECS, currently only supports ECS_ALIYUN.
         * @return {@code this}
         */
        public Builder ecsType(java.lang.String ecsType) {
            this.ecsType = ecsType;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getEcsType}
         * @param ecsType Property ecsType: The type of ECS, currently only supports ECS_ALIYUN.
         * @return {@code this}
         */
        public Builder ecsType(com.aliyun.ros.cdk.core.IResolvable ecsType) {
            this.ecsType = ecsType;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getEnvId}
         * @param envId Property envId: Environment id.
         * @return {@code this}
         */
        public Builder envId(java.lang.String envId) {
            this.envId = envId;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getEnvId}
         * @param envId Property envId: Environment id.
         * @return {@code this}
         */
        public Builder envId(com.aliyun.ros.cdk.core.IResolvable envId) {
            this.envId = envId;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getMachineInfos}
         * @param machineInfos Property machineInfos: The machine infos.
         * @return {@code this}
         */
        public Builder machineInfos(com.aliyun.ros.cdk.core.IResolvable machineInfos) {
            this.machineInfos = machineInfos;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getMachineInfos}
         * @param machineInfos Property machineInfos: The machine infos.
         * @return {@code this}
         */
        public Builder machineInfos(java.util.List<? extends java.lang.Object> machineInfos) {
            this.machineInfos = machineInfos;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getTagIds}
         * @param tagIds Property tagIds: The ids of tag.
         * @return {@code this}
         */
        public Builder tagIds(com.aliyun.ros.cdk.core.IResolvable tagIds) {
            this.tagIds = tagIds;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getTagIds}
         * @param tagIds Property tagIds: The ids of tag.
         * @return {@code this}
         */
        public Builder tagIds(java.util.List<? extends java.lang.Object> tagIds) {
            this.tagIds = tagIds;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getType}
         * @param type Property type: Host group type, currently only supports ECS.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link HostGroupProps#getType}
         * @param type Property type: Host group type, currently only supports ECS.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HostGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HostGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HostGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HostGroupProps {
        private final java.lang.Object name;
        private final java.lang.Object organizationId;
        private final java.lang.Object serviceConnectionId;
        private final java.lang.Object aliyunRegion;
        private final java.lang.Object ecsLabelKey;
        private final java.lang.Object ecsLabelValue;
        private final java.lang.Object ecsType;
        private final java.lang.Object envId;
        private final java.lang.Object machineInfos;
        private final java.lang.Object tagIds;
        private final java.lang.Object type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.organizationId = software.amazon.jsii.Kernel.get(this, "organizationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceConnectionId = software.amazon.jsii.Kernel.get(this, "serviceConnectionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aliyunRegion = software.amazon.jsii.Kernel.get(this, "aliyunRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsLabelKey = software.amazon.jsii.Kernel.get(this, "ecsLabelKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsLabelValue = software.amazon.jsii.Kernel.get(this, "ecsLabelValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsType = software.amazon.jsii.Kernel.get(this, "ecsType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.envId = software.amazon.jsii.Kernel.get(this, "envId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.machineInfos = software.amazon.jsii.Kernel.get(this, "machineInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagIds = software.amazon.jsii.Kernel.get(this, "tagIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.organizationId = java.util.Objects.requireNonNull(builder.organizationId, "organizationId is required");
            this.serviceConnectionId = java.util.Objects.requireNonNull(builder.serviceConnectionId, "serviceConnectionId is required");
            this.aliyunRegion = builder.aliyunRegion;
            this.ecsLabelKey = builder.ecsLabelKey;
            this.ecsLabelValue = builder.ecsLabelValue;
            this.ecsType = builder.ecsType;
            this.envId = builder.envId;
            this.machineInfos = builder.machineInfos;
            this.tagIds = builder.tagIds;
            this.type = builder.type;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getOrganizationId() {
            return this.organizationId;
        }

        @Override
        public final java.lang.Object getServiceConnectionId() {
            return this.serviceConnectionId;
        }

        @Override
        public final java.lang.Object getAliyunRegion() {
            return this.aliyunRegion;
        }

        @Override
        public final java.lang.Object getEcsLabelKey() {
            return this.ecsLabelKey;
        }

        @Override
        public final java.lang.Object getEcsLabelValue() {
            return this.ecsLabelValue;
        }

        @Override
        public final java.lang.Object getEcsType() {
            return this.ecsType;
        }

        @Override
        public final java.lang.Object getEnvId() {
            return this.envId;
        }

        @Override
        public final java.lang.Object getMachineInfos() {
            return this.machineInfos;
        }

        @Override
        public final java.lang.Object getTagIds() {
            return this.tagIds;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            data.set("organizationId", om.valueToTree(this.getOrganizationId()));
            data.set("serviceConnectionId", om.valueToTree(this.getServiceConnectionId()));
            if (this.getAliyunRegion() != null) {
                data.set("aliyunRegion", om.valueToTree(this.getAliyunRegion()));
            }
            if (this.getEcsLabelKey() != null) {
                data.set("ecsLabelKey", om.valueToTree(this.getEcsLabelKey()));
            }
            if (this.getEcsLabelValue() != null) {
                data.set("ecsLabelValue", om.valueToTree(this.getEcsLabelValue()));
            }
            if (this.getEcsType() != null) {
                data.set("ecsType", om.valueToTree(this.getEcsType()));
            }
            if (this.getEnvId() != null) {
                data.set("envId", om.valueToTree(this.getEnvId()));
            }
            if (this.getMachineInfos() != null) {
                data.set("machineInfos", om.valueToTree(this.getMachineInfos()));
            }
            if (this.getTagIds() != null) {
                data.set("tagIds", om.valueToTree(this.getTagIds()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-devops.HostGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HostGroupProps.Jsii$Proxy that = (HostGroupProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (!organizationId.equals(that.organizationId)) return false;
            if (!serviceConnectionId.equals(that.serviceConnectionId)) return false;
            if (this.aliyunRegion != null ? !this.aliyunRegion.equals(that.aliyunRegion) : that.aliyunRegion != null) return false;
            if (this.ecsLabelKey != null ? !this.ecsLabelKey.equals(that.ecsLabelKey) : that.ecsLabelKey != null) return false;
            if (this.ecsLabelValue != null ? !this.ecsLabelValue.equals(that.ecsLabelValue) : that.ecsLabelValue != null) return false;
            if (this.ecsType != null ? !this.ecsType.equals(that.ecsType) : that.ecsType != null) return false;
            if (this.envId != null ? !this.envId.equals(that.envId) : that.envId != null) return false;
            if (this.machineInfos != null ? !this.machineInfos.equals(that.machineInfos) : that.machineInfos != null) return false;
            if (this.tagIds != null ? !this.tagIds.equals(that.tagIds) : that.tagIds != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.organizationId.hashCode());
            result = 31 * result + (this.serviceConnectionId.hashCode());
            result = 31 * result + (this.aliyunRegion != null ? this.aliyunRegion.hashCode() : 0);
            result = 31 * result + (this.ecsLabelKey != null ? this.ecsLabelKey.hashCode() : 0);
            result = 31 * result + (this.ecsLabelValue != null ? this.ecsLabelValue.hashCode() : 0);
            result = 31 * result + (this.ecsType != null ? this.ecsType.hashCode() : 0);
            result = 31 * result + (this.envId != null ? this.envId.hashCode() : 0);
            result = 31 * result + (this.machineInfos != null ? this.machineInfos.hashCode() : 0);
            result = 31 * result + (this.tagIds != null ? this.tagIds.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}
