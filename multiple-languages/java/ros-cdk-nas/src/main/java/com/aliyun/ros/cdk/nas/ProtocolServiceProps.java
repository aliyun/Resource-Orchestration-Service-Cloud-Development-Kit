package com.aliyun.ros.cdk.nas;

/**
 * Properties for defining a <code>ALIYUN::NAS::ProtocolService</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:02.704Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.ProtocolServiceProps")
@software.amazon.jsii.Jsii.Proxy(ProtocolServiceProps.Jsii$Proxy.class)
public interface ProtocolServiceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property fileSystemId: File system ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFileSystemId();

    /**
     * Property protocolSpec: The spec of protocol service.
     * <p>
     * Default: General. Values: General
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocolSpec();

    /**
     * Property protocolType: The protocol type of agreement service.
     * <p>
     * Ranges:
     * NFS: Agreement service supports NFS protocol access.
     * The default value: NFS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocolType();

    /**
     * Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property vSwitchId: Agreement service vswitchid.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property description: Description of protocol service.The console shows the "protocol service name". limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property throughput: The bandwidth of the agreement service.
     * <p>
     * Unit: MB/S.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getThroughput() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ProtocolServiceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ProtocolServiceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ProtocolServiceProps> {
        java.lang.Object fileSystemId;
        java.lang.Object protocolSpec;
        java.lang.Object protocolType;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object description;
        java.lang.Object throughput;

        /**
         * Sets the value of {@link ProtocolServiceProps#getFileSystemId}
         * @param fileSystemId Property fileSystemId: File system ID. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(java.lang.String fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolServiceProps#getFileSystemId}
         * @param fileSystemId Property fileSystemId: File system ID. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolServiceProps#getProtocolSpec}
         * @param protocolSpec Property protocolSpec: The spec of protocol service. This parameter is required.
         *                     Default: General. Values: General
         * @return {@code this}
         */
        public Builder protocolSpec(java.lang.String protocolSpec) {
            this.protocolSpec = protocolSpec;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolServiceProps#getProtocolSpec}
         * @param protocolSpec Property protocolSpec: The spec of protocol service. This parameter is required.
         *                     Default: General. Values: General
         * @return {@code this}
         */
        public Builder protocolSpec(com.aliyun.ros.cdk.core.IResolvable protocolSpec) {
            this.protocolSpec = protocolSpec;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolServiceProps#getProtocolType}
         * @param protocolType Property protocolType: The protocol type of agreement service. This parameter is required.
         *                     Ranges:
         *                     NFS: Agreement service supports NFS protocol access.
         *                     The default value: NFS.
         * @return {@code this}
         */
        public Builder protocolType(java.lang.String protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolServiceProps#getProtocolType}
         * @param protocolType Property protocolType: The protocol type of agreement service. This parameter is required.
         *                     Ranges:
         *                     NFS: Agreement service supports NFS protocol access.
         *                     The default value: NFS.
         * @return {@code this}
         */
        public Builder protocolType(com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolServiceProps#getVpcId}
         * @param vpcId Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolServiceProps#getVpcId}
         * @param vpcId Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolServiceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: Agreement service vswitchid. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolServiceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: Agreement service vswitchid. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolServiceProps#getDescription}
         * @param description Property description: Description of protocol service.The console shows the "protocol service name". limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolServiceProps#getDescription}
         * @param description Property description: Description of protocol service.The console shows the "protocol service name". limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolServiceProps#getThroughput}
         * @param throughput Property throughput: The bandwidth of the agreement service.
         *                   Unit: MB/S.
         * @return {@code this}
         */
        public Builder throughput(java.lang.Number throughput) {
            this.throughput = throughput;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolServiceProps#getThroughput}
         * @param throughput Property throughput: The bandwidth of the agreement service.
         *                   Unit: MB/S.
         * @return {@code this}
         */
        public Builder throughput(com.aliyun.ros.cdk.core.IResolvable throughput) {
            this.throughput = throughput;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ProtocolServiceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ProtocolServiceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ProtocolServiceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ProtocolServiceProps {
        private final java.lang.Object fileSystemId;
        private final java.lang.Object protocolSpec;
        private final java.lang.Object protocolType;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object description;
        private final java.lang.Object throughput;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.fileSystemId = software.amazon.jsii.Kernel.get(this, "fileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocolSpec = software.amazon.jsii.Kernel.get(this, "protocolSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocolType = software.amazon.jsii.Kernel.get(this, "protocolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.throughput = software.amazon.jsii.Kernel.get(this, "throughput", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.fileSystemId = java.util.Objects.requireNonNull(builder.fileSystemId, "fileSystemId is required");
            this.protocolSpec = java.util.Objects.requireNonNull(builder.protocolSpec, "protocolSpec is required");
            this.protocolType = java.util.Objects.requireNonNull(builder.protocolType, "protocolType is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.description = builder.description;
            this.throughput = builder.throughput;
        }

        @Override
        public final java.lang.Object getFileSystemId() {
            return this.fileSystemId;
        }

        @Override
        public final java.lang.Object getProtocolSpec() {
            return this.protocolSpec;
        }

        @Override
        public final java.lang.Object getProtocolType() {
            return this.protocolType;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getThroughput() {
            return this.throughput;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("fileSystemId", om.valueToTree(this.getFileSystemId()));
            data.set("protocolSpec", om.valueToTree(this.getProtocolSpec()));
            data.set("protocolType", om.valueToTree(this.getProtocolType()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getThroughput() != null) {
                data.set("throughput", om.valueToTree(this.getThroughput()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.ProtocolServiceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ProtocolServiceProps.Jsii$Proxy that = (ProtocolServiceProps.Jsii$Proxy) o;

            if (!fileSystemId.equals(that.fileSystemId)) return false;
            if (!protocolSpec.equals(that.protocolSpec)) return false;
            if (!protocolType.equals(that.protocolType)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.throughput != null ? this.throughput.equals(that.throughput) : that.throughput == null;
        }

        @Override
        public final int hashCode() {
            int result = this.fileSystemId.hashCode();
            result = 31 * result + (this.protocolSpec.hashCode());
            result = 31 * result + (this.protocolType.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.throughput != null ? this.throughput.hashCode() : 0);
            return result;
        }
    }
}
