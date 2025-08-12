package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>FullNatEntry</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-fullnatentry
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.169Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.FullNatEntryProps")
@software.amazon.jsii.Jsii.Proxy(FullNatEntryProps.Jsii$Proxy.class)
public interface FullNatEntryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accessIp: The backend IP address to be modified in FULLNAT address translation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessIp();

    /**
     * Property accessPort: The backend port to be modified in the mapping of FULLNAT port.
     * <p>
     * Valid values: 1 to 65535.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessPort();

    /**
     * Property fullNatTableId: The ID of the FULLNAT table to which the FULLNAT entry belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFullNatTableId();

    /**
     * Property ipProtocol: The protocol of the packets that are forwarded by the port.
     * <p>
     * Valid values:
     * TCP
     * UDP
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpProtocol();

    /**
     * Property natIp: The NAT IP address that provides address translation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatIp();

    /**
     * Property natIpPort: The frontend port to be modified in the mapping of FULLNAT port.
     * <p>
     * Valid values: 1 to 65535.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatIpPort();

    /**
     * Property networkInterfaceId: The elastic network interface (ENI) ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkInterfaceId();

    /**
     * Property fullNatEntryDescription: The description of the FULLNAT entry.
     * <p>
     * This parameter is optional. If you enter a description, the description must be 2 to 256 characters in length, and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFullNatEntryDescription() {
        return null;
    }

    /**
     * Property fullNatEntryName: The FULLNAT entry name.
     * <p>
     * The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFullNatEntryName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link FullNatEntryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FullNatEntryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FullNatEntryProps> {
        java.lang.Object accessIp;
        java.lang.Object accessPort;
        java.lang.Object fullNatTableId;
        java.lang.Object ipProtocol;
        java.lang.Object natIp;
        java.lang.Object natIpPort;
        java.lang.Object networkInterfaceId;
        java.lang.Object fullNatEntryDescription;
        java.lang.Object fullNatEntryName;

        /**
         * Sets the value of {@link FullNatEntryProps#getAccessIp}
         * @param accessIp Property accessIp: The backend IP address to be modified in FULLNAT address translation. This parameter is required.
         * @return {@code this}
         */
        public Builder accessIp(java.lang.String accessIp) {
            this.accessIp = accessIp;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getAccessIp}
         * @param accessIp Property accessIp: The backend IP address to be modified in FULLNAT address translation. This parameter is required.
         * @return {@code this}
         */
        public Builder accessIp(com.aliyun.ros.cdk.core.IResolvable accessIp) {
            this.accessIp = accessIp;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getAccessPort}
         * @param accessPort Property accessPort: The backend port to be modified in the mapping of FULLNAT port. This parameter is required.
         *                   Valid values: 1 to 65535.
         * @return {@code this}
         */
        public Builder accessPort(java.lang.String accessPort) {
            this.accessPort = accessPort;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getAccessPort}
         * @param accessPort Property accessPort: The backend port to be modified in the mapping of FULLNAT port. This parameter is required.
         *                   Valid values: 1 to 65535.
         * @return {@code this}
         */
        public Builder accessPort(com.aliyun.ros.cdk.core.IResolvable accessPort) {
            this.accessPort = accessPort;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getFullNatTableId}
         * @param fullNatTableId Property fullNatTableId: The ID of the FULLNAT table to which the FULLNAT entry belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder fullNatTableId(java.lang.String fullNatTableId) {
            this.fullNatTableId = fullNatTableId;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getFullNatTableId}
         * @param fullNatTableId Property fullNatTableId: The ID of the FULLNAT table to which the FULLNAT entry belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder fullNatTableId(com.aliyun.ros.cdk.core.IResolvable fullNatTableId) {
            this.fullNatTableId = fullNatTableId;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getIpProtocol}
         * @param ipProtocol Property ipProtocol: The protocol of the packets that are forwarded by the port. This parameter is required.
         *                   Valid values:
         *                   TCP
         *                   UDP
         * @return {@code this}
         */
        public Builder ipProtocol(java.lang.String ipProtocol) {
            this.ipProtocol = ipProtocol;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getIpProtocol}
         * @param ipProtocol Property ipProtocol: The protocol of the packets that are forwarded by the port. This parameter is required.
         *                   Valid values:
         *                   TCP
         *                   UDP
         * @return {@code this}
         */
        public Builder ipProtocol(com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
            this.ipProtocol = ipProtocol;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getNatIp}
         * @param natIp Property natIp: The NAT IP address that provides address translation. This parameter is required.
         * @return {@code this}
         */
        public Builder natIp(java.lang.String natIp) {
            this.natIp = natIp;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getNatIp}
         * @param natIp Property natIp: The NAT IP address that provides address translation. This parameter is required.
         * @return {@code this}
         */
        public Builder natIp(com.aliyun.ros.cdk.core.IResolvable natIp) {
            this.natIp = natIp;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getNatIpPort}
         * @param natIpPort Property natIpPort: The frontend port to be modified in the mapping of FULLNAT port. This parameter is required.
         *                  Valid values: 1 to 65535.
         * @return {@code this}
         */
        public Builder natIpPort(java.lang.String natIpPort) {
            this.natIpPort = natIpPort;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getNatIpPort}
         * @param natIpPort Property natIpPort: The frontend port to be modified in the mapping of FULLNAT port. This parameter is required.
         *                  Valid values: 1 to 65535.
         * @return {@code this}
         */
        public Builder natIpPort(com.aliyun.ros.cdk.core.IResolvable natIpPort) {
            this.natIpPort = natIpPort;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getNetworkInterfaceId}
         * @param networkInterfaceId Property networkInterfaceId: The elastic network interface (ENI) ID. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(java.lang.String networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getNetworkInterfaceId}
         * @param networkInterfaceId Property networkInterfaceId: The elastic network interface (ENI) ID. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(com.aliyun.ros.cdk.core.IResolvable networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getFullNatEntryDescription}
         * @param fullNatEntryDescription Property fullNatEntryDescription: The description of the FULLNAT entry.
         *                                This parameter is optional. If you enter a description, the description must be 2 to 256 characters in length, and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder fullNatEntryDescription(java.lang.String fullNatEntryDescription) {
            this.fullNatEntryDescription = fullNatEntryDescription;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getFullNatEntryDescription}
         * @param fullNatEntryDescription Property fullNatEntryDescription: The description of the FULLNAT entry.
         *                                This parameter is optional. If you enter a description, the description must be 2 to 256 characters in length, and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder fullNatEntryDescription(com.aliyun.ros.cdk.core.IResolvable fullNatEntryDescription) {
            this.fullNatEntryDescription = fullNatEntryDescription;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getFullNatEntryName}
         * @param fullNatEntryName Property fullNatEntryName: The FULLNAT entry name.
         *                         The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder fullNatEntryName(java.lang.String fullNatEntryName) {
            this.fullNatEntryName = fullNatEntryName;
            return this;
        }

        /**
         * Sets the value of {@link FullNatEntryProps#getFullNatEntryName}
         * @param fullNatEntryName Property fullNatEntryName: The FULLNAT entry name.
         *                         The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder fullNatEntryName(com.aliyun.ros.cdk.core.IResolvable fullNatEntryName) {
            this.fullNatEntryName = fullNatEntryName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link FullNatEntryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FullNatEntryProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FullNatEntryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FullNatEntryProps {
        private final java.lang.Object accessIp;
        private final java.lang.Object accessPort;
        private final java.lang.Object fullNatTableId;
        private final java.lang.Object ipProtocol;
        private final java.lang.Object natIp;
        private final java.lang.Object natIpPort;
        private final java.lang.Object networkInterfaceId;
        private final java.lang.Object fullNatEntryDescription;
        private final java.lang.Object fullNatEntryName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessIp = software.amazon.jsii.Kernel.get(this, "accessIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessPort = software.amazon.jsii.Kernel.get(this, "accessPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fullNatTableId = software.amazon.jsii.Kernel.get(this, "fullNatTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipProtocol = software.amazon.jsii.Kernel.get(this, "ipProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natIp = software.amazon.jsii.Kernel.get(this, "natIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natIpPort = software.amazon.jsii.Kernel.get(this, "natIpPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkInterfaceId = software.amazon.jsii.Kernel.get(this, "networkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fullNatEntryDescription = software.amazon.jsii.Kernel.get(this, "fullNatEntryDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fullNatEntryName = software.amazon.jsii.Kernel.get(this, "fullNatEntryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessIp = java.util.Objects.requireNonNull(builder.accessIp, "accessIp is required");
            this.accessPort = java.util.Objects.requireNonNull(builder.accessPort, "accessPort is required");
            this.fullNatTableId = java.util.Objects.requireNonNull(builder.fullNatTableId, "fullNatTableId is required");
            this.ipProtocol = java.util.Objects.requireNonNull(builder.ipProtocol, "ipProtocol is required");
            this.natIp = java.util.Objects.requireNonNull(builder.natIp, "natIp is required");
            this.natIpPort = java.util.Objects.requireNonNull(builder.natIpPort, "natIpPort is required");
            this.networkInterfaceId = java.util.Objects.requireNonNull(builder.networkInterfaceId, "networkInterfaceId is required");
            this.fullNatEntryDescription = builder.fullNatEntryDescription;
            this.fullNatEntryName = builder.fullNatEntryName;
        }

        @Override
        public final java.lang.Object getAccessIp() {
            return this.accessIp;
        }

        @Override
        public final java.lang.Object getAccessPort() {
            return this.accessPort;
        }

        @Override
        public final java.lang.Object getFullNatTableId() {
            return this.fullNatTableId;
        }

        @Override
        public final java.lang.Object getIpProtocol() {
            return this.ipProtocol;
        }

        @Override
        public final java.lang.Object getNatIp() {
            return this.natIp;
        }

        @Override
        public final java.lang.Object getNatIpPort() {
            return this.natIpPort;
        }

        @Override
        public final java.lang.Object getNetworkInterfaceId() {
            return this.networkInterfaceId;
        }

        @Override
        public final java.lang.Object getFullNatEntryDescription() {
            return this.fullNatEntryDescription;
        }

        @Override
        public final java.lang.Object getFullNatEntryName() {
            return this.fullNatEntryName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accessIp", om.valueToTree(this.getAccessIp()));
            data.set("accessPort", om.valueToTree(this.getAccessPort()));
            data.set("fullNatTableId", om.valueToTree(this.getFullNatTableId()));
            data.set("ipProtocol", om.valueToTree(this.getIpProtocol()));
            data.set("natIp", om.valueToTree(this.getNatIp()));
            data.set("natIpPort", om.valueToTree(this.getNatIpPort()));
            data.set("networkInterfaceId", om.valueToTree(this.getNetworkInterfaceId()));
            if (this.getFullNatEntryDescription() != null) {
                data.set("fullNatEntryDescription", om.valueToTree(this.getFullNatEntryDescription()));
            }
            if (this.getFullNatEntryName() != null) {
                data.set("fullNatEntryName", om.valueToTree(this.getFullNatEntryName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.FullNatEntryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FullNatEntryProps.Jsii$Proxy that = (FullNatEntryProps.Jsii$Proxy) o;

            if (!accessIp.equals(that.accessIp)) return false;
            if (!accessPort.equals(that.accessPort)) return false;
            if (!fullNatTableId.equals(that.fullNatTableId)) return false;
            if (!ipProtocol.equals(that.ipProtocol)) return false;
            if (!natIp.equals(that.natIp)) return false;
            if (!natIpPort.equals(that.natIpPort)) return false;
            if (!networkInterfaceId.equals(that.networkInterfaceId)) return false;
            if (this.fullNatEntryDescription != null ? !this.fullNatEntryDescription.equals(that.fullNatEntryDescription) : that.fullNatEntryDescription != null) return false;
            return this.fullNatEntryName != null ? this.fullNatEntryName.equals(that.fullNatEntryName) : that.fullNatEntryName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessIp.hashCode();
            result = 31 * result + (this.accessPort.hashCode());
            result = 31 * result + (this.fullNatTableId.hashCode());
            result = 31 * result + (this.ipProtocol.hashCode());
            result = 31 * result + (this.natIp.hashCode());
            result = 31 * result + (this.natIpPort.hashCode());
            result = 31 * result + (this.networkInterfaceId.hashCode());
            result = 31 * result + (this.fullNatEntryDescription != null ? this.fullNatEntryDescription.hashCode() : 0);
            result = 31 * result + (this.fullNatEntryName != null ? this.fullNatEntryName.hashCode() : 0);
            return result;
        }
    }
}
