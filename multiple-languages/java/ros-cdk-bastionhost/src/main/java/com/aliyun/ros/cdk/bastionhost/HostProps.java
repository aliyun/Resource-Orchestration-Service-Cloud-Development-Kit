package com.aliyun.ros.cdk.bastionhost;

/**
 * Properties for defining a <code>Host</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:50.112Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bastionhost.$Module.class, fqn = "@alicloud/ros-cdk-bastionhost.HostProps")
@software.amazon.jsii.Jsii.Proxy(HostProps.Jsii$Proxy.class)
public interface HostProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property activeAddressType: The endpoint type of the host that you want to create.
     * <p>
     * Valid values:
     * Public: a public endpoint
     * Private: an internal endpoint
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getActiveAddressType();

    /**
     * Property hostName: The name of the host that you want to create.
     * <p>
     * The name can be up to 128 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHostName();

    /**
     * Property instanceId: The ID of the Bastionhost instance where you want to create the host.
     * <p>
     * Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property osType: The operating system of the host that you want to create.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Linux</li>
     * <li>Windows</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOsType();

    /**
     * Property source: The source of the host that you want to create.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Local: an on-premises host</li>
     * <li>Ecs: an Elastic Compute Service (ECS) instance</li>
     * <li>Rds: a host in a dedicated cluster</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSource();

    /**
     * Property comment: The description of the host that you want to create.
     * <p>
     * The value can be up to 500 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComment() {
        return null;
    }

    /**
     * Property hostPrivateAddress: The internal endpoint of the host that you want to create.
     * <p>
     * You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Private.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostPrivateAddress() {
        return null;
    }

    /**
     * Property hostPublicAddress: The public endpoint of the host that you want to create.
     * <p>
     * You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Public.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostPublicAddress() {
        return null;
    }

    /**
     * Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
     * <p>
     * Note: This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceRegionId() {
        return null;
    }

    /**
     * Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
     * <p>
     * Note This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HostProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HostProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HostProps> {
        java.lang.Object activeAddressType;
        java.lang.Object hostName;
        java.lang.Object instanceId;
        java.lang.Object osType;
        java.lang.Object source;
        java.lang.Object comment;
        java.lang.Object hostPrivateAddress;
        java.lang.Object hostPublicAddress;
        java.lang.Object instanceRegionId;
        java.lang.Object sourceInstanceId;

        /**
         * Sets the value of {@link HostProps#getActiveAddressType}
         * @param activeAddressType Property activeAddressType: The endpoint type of the host that you want to create. This parameter is required.
         *                          Valid values:
         *                          Public: a public endpoint
         *                          Private: an internal endpoint
         * @return {@code this}
         */
        public Builder activeAddressType(java.lang.String activeAddressType) {
            this.activeAddressType = activeAddressType;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getActiveAddressType}
         * @param activeAddressType Property activeAddressType: The endpoint type of the host that you want to create. This parameter is required.
         *                          Valid values:
         *                          Public: a public endpoint
         *                          Private: an internal endpoint
         * @return {@code this}
         */
        public Builder activeAddressType(com.aliyun.ros.cdk.core.IResolvable activeAddressType) {
            this.activeAddressType = activeAddressType;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getHostName}
         * @param hostName Property hostName: The name of the host that you want to create. This parameter is required.
         *                 The name can be up to 128 characters in length.
         * @return {@code this}
         */
        public Builder hostName(java.lang.String hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getHostName}
         * @param hostName Property hostName: The name of the host that you want to create. This parameter is required.
         *                 The name can be up to 128 characters in length.
         * @return {@code this}
         */
        public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the Bastionhost instance where you want to create the host. This parameter is required.
         *                   Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the Bastionhost instance where you want to create the host. This parameter is required.
         *                   Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getOsType}
         * @param osType Property osType: The operating system of the host that you want to create. This parameter is required.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li>Linux</li>
         *               <li>Windows</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder osType(java.lang.String osType) {
            this.osType = osType;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getOsType}
         * @param osType Property osType: The operating system of the host that you want to create. This parameter is required.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li>Linux</li>
         *               <li>Windows</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder osType(com.aliyun.ros.cdk.core.IResolvable osType) {
            this.osType = osType;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getSource}
         * @param source Property source: The source of the host that you want to create. This parameter is required.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li>Local: an on-premises host</li>
         *               <li>Ecs: an Elastic Compute Service (ECS) instance</li>
         *               <li>Rds: a host in a dedicated cluster</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder source(java.lang.String source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getSource}
         * @param source Property source: The source of the host that you want to create. This parameter is required.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li>Local: an on-premises host</li>
         *               <li>Ecs: an Elastic Compute Service (ECS) instance</li>
         *               <li>Rds: a host in a dedicated cluster</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.core.IResolvable source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getComment}
         * @param comment Property comment: The description of the host that you want to create.
         *                The value can be up to 500 characters.
         * @return {@code this}
         */
        public Builder comment(java.lang.String comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getComment}
         * @param comment Property comment: The description of the host that you want to create.
         *                The value can be up to 500 characters.
         * @return {@code this}
         */
        public Builder comment(com.aliyun.ros.cdk.core.IResolvable comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getHostPrivateAddress}
         * @param hostPrivateAddress Property hostPrivateAddress: The internal endpoint of the host that you want to create.
         *                           You can set this parameter to a domain name or an IP address.
         *                           Note: This parameter is required if the ActiveAddressType parameter is set to Private.
         * @return {@code this}
         */
        public Builder hostPrivateAddress(java.lang.String hostPrivateAddress) {
            this.hostPrivateAddress = hostPrivateAddress;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getHostPrivateAddress}
         * @param hostPrivateAddress Property hostPrivateAddress: The internal endpoint of the host that you want to create.
         *                           You can set this parameter to a domain name or an IP address.
         *                           Note: This parameter is required if the ActiveAddressType parameter is set to Private.
         * @return {@code this}
         */
        public Builder hostPrivateAddress(com.aliyun.ros.cdk.core.IResolvable hostPrivateAddress) {
            this.hostPrivateAddress = hostPrivateAddress;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getHostPublicAddress}
         * @param hostPublicAddress Property hostPublicAddress: The public endpoint of the host that you want to create.
         *                          You can set this parameter to a domain name or an IP address.
         *                          Note: This parameter is required if the ActiveAddressType parameter is set to Public.
         * @return {@code this}
         */
        public Builder hostPublicAddress(java.lang.String hostPublicAddress) {
            this.hostPublicAddress = hostPublicAddress;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getHostPublicAddress}
         * @param hostPublicAddress Property hostPublicAddress: The public endpoint of the host that you want to create.
         *                          You can set this parameter to a domain name or an IP address.
         *                          Note: This parameter is required if the ActiveAddressType parameter is set to Public.
         * @return {@code this}
         */
        public Builder hostPublicAddress(com.aliyun.ros.cdk.core.IResolvable hostPublicAddress) {
            this.hostPublicAddress = hostPublicAddress;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getInstanceRegionId}
         * @param instanceRegionId Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
         *                         Note: This parameter is required if the Source parameter is set to Ecs or Rds.
         * @return {@code this}
         */
        public Builder instanceRegionId(java.lang.String instanceRegionId) {
            this.instanceRegionId = instanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getInstanceRegionId}
         * @param instanceRegionId Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
         *                         Note: This parameter is required if the Source parameter is set to Ecs or Rds.
         * @return {@code this}
         */
        public Builder instanceRegionId(com.aliyun.ros.cdk.core.IResolvable instanceRegionId) {
            this.instanceRegionId = instanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getSourceInstanceId}
         * @param sourceInstanceId Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
         *                         Note This parameter is required if the Source parameter is set to Ecs or Rds.
         * @return {@code this}
         */
        public Builder sourceInstanceId(java.lang.String sourceInstanceId) {
            this.sourceInstanceId = sourceInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link HostProps#getSourceInstanceId}
         * @param sourceInstanceId Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
         *                         Note This parameter is required if the Source parameter is set to Ecs or Rds.
         * @return {@code this}
         */
        public Builder sourceInstanceId(com.aliyun.ros.cdk.core.IResolvable sourceInstanceId) {
            this.sourceInstanceId = sourceInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HostProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HostProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HostProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HostProps {
        private final java.lang.Object activeAddressType;
        private final java.lang.Object hostName;
        private final java.lang.Object instanceId;
        private final java.lang.Object osType;
        private final java.lang.Object source;
        private final java.lang.Object comment;
        private final java.lang.Object hostPrivateAddress;
        private final java.lang.Object hostPublicAddress;
        private final java.lang.Object instanceRegionId;
        private final java.lang.Object sourceInstanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.activeAddressType = software.amazon.jsii.Kernel.get(this, "activeAddressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.osType = software.amazon.jsii.Kernel.get(this, "osType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.source = software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.comment = software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostPrivateAddress = software.amazon.jsii.Kernel.get(this, "hostPrivateAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostPublicAddress = software.amazon.jsii.Kernel.get(this, "hostPublicAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceRegionId = software.amazon.jsii.Kernel.get(this, "instanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceInstanceId = software.amazon.jsii.Kernel.get(this, "sourceInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.activeAddressType = java.util.Objects.requireNonNull(builder.activeAddressType, "activeAddressType is required");
            this.hostName = java.util.Objects.requireNonNull(builder.hostName, "hostName is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.osType = java.util.Objects.requireNonNull(builder.osType, "osType is required");
            this.source = java.util.Objects.requireNonNull(builder.source, "source is required");
            this.comment = builder.comment;
            this.hostPrivateAddress = builder.hostPrivateAddress;
            this.hostPublicAddress = builder.hostPublicAddress;
            this.instanceRegionId = builder.instanceRegionId;
            this.sourceInstanceId = builder.sourceInstanceId;
        }

        @Override
        public final java.lang.Object getActiveAddressType() {
            return this.activeAddressType;
        }

        @Override
        public final java.lang.Object getHostName() {
            return this.hostName;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getOsType() {
            return this.osType;
        }

        @Override
        public final java.lang.Object getSource() {
            return this.source;
        }

        @Override
        public final java.lang.Object getComment() {
            return this.comment;
        }

        @Override
        public final java.lang.Object getHostPrivateAddress() {
            return this.hostPrivateAddress;
        }

        @Override
        public final java.lang.Object getHostPublicAddress() {
            return this.hostPublicAddress;
        }

        @Override
        public final java.lang.Object getInstanceRegionId() {
            return this.instanceRegionId;
        }

        @Override
        public final java.lang.Object getSourceInstanceId() {
            return this.sourceInstanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("activeAddressType", om.valueToTree(this.getActiveAddressType()));
            data.set("hostName", om.valueToTree(this.getHostName()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("osType", om.valueToTree(this.getOsType()));
            data.set("source", om.valueToTree(this.getSource()));
            if (this.getComment() != null) {
                data.set("comment", om.valueToTree(this.getComment()));
            }
            if (this.getHostPrivateAddress() != null) {
                data.set("hostPrivateAddress", om.valueToTree(this.getHostPrivateAddress()));
            }
            if (this.getHostPublicAddress() != null) {
                data.set("hostPublicAddress", om.valueToTree(this.getHostPublicAddress()));
            }
            if (this.getInstanceRegionId() != null) {
                data.set("instanceRegionId", om.valueToTree(this.getInstanceRegionId()));
            }
            if (this.getSourceInstanceId() != null) {
                data.set("sourceInstanceId", om.valueToTree(this.getSourceInstanceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-bastionhost.HostProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HostProps.Jsii$Proxy that = (HostProps.Jsii$Proxy) o;

            if (!activeAddressType.equals(that.activeAddressType)) return false;
            if (!hostName.equals(that.hostName)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!osType.equals(that.osType)) return false;
            if (!source.equals(that.source)) return false;
            if (this.comment != null ? !this.comment.equals(that.comment) : that.comment != null) return false;
            if (this.hostPrivateAddress != null ? !this.hostPrivateAddress.equals(that.hostPrivateAddress) : that.hostPrivateAddress != null) return false;
            if (this.hostPublicAddress != null ? !this.hostPublicAddress.equals(that.hostPublicAddress) : that.hostPublicAddress != null) return false;
            if (this.instanceRegionId != null ? !this.instanceRegionId.equals(that.instanceRegionId) : that.instanceRegionId != null) return false;
            return this.sourceInstanceId != null ? this.sourceInstanceId.equals(that.sourceInstanceId) : that.sourceInstanceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.activeAddressType.hashCode();
            result = 31 * result + (this.hostName.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.osType.hashCode());
            result = 31 * result + (this.source.hashCode());
            result = 31 * result + (this.comment != null ? this.comment.hashCode() : 0);
            result = 31 * result + (this.hostPrivateAddress != null ? this.hostPrivateAddress.hashCode() : 0);
            result = 31 * result + (this.hostPublicAddress != null ? this.hostPublicAddress.hashCode() : 0);
            result = 31 * result + (this.instanceRegionId != null ? this.instanceRegionId.hashCode() : 0);
            result = 31 * result + (this.sourceInstanceId != null ? this.sourceInstanceId.hashCode() : 0);
            return result;
        }
    }
}
