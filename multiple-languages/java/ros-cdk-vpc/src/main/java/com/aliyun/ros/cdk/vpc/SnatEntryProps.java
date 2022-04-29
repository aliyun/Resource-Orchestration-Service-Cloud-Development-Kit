package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::SnatEntry`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:30.767Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.SnatEntryProps")
@software.amazon.jsii.Jsii.Proxy(SnatEntryProps.Jsii$Proxy.class)
public interface SnatEntryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property snatIp: The public IP address.
     * <p>
     * Separate multiple EIPs with commas.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSnatIp();

    /**
     * Property snatTableId: The ID of the SNAT table.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSnatTableId();

    /**
     * Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnatEntryName() {
        return null;
    }

    /**
     * Property sourceCidr: Specifies the network segment of the switch.
     * <p>
     * For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceCidr() {
        return null;
    }

    /**
     * Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceVSwitchIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SnatEntryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SnatEntryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SnatEntryProps> {
        java.lang.Object snatIp;
        java.lang.Object snatTableId;
        java.lang.Object snatEntryName;
        java.lang.Object sourceCidr;
        java.lang.Object sourceVSwitchIds;

        /**
         * Sets the value of {@link SnatEntryProps#getSnatIp}
         * @param snatIp Property snatIp: The public IP address. This parameter is required.
         *               Separate multiple EIPs with commas.
         * @return {@code this}
         */
        public Builder snatIp(java.lang.String snatIp) {
            this.snatIp = snatIp;
            return this;
        }

        /**
         * Sets the value of {@link SnatEntryProps#getSnatIp}
         * @param snatIp Property snatIp: The public IP address. This parameter is required.
         *               Separate multiple EIPs with commas.
         * @return {@code this}
         */
        public Builder snatIp(com.aliyun.ros.cdk.core.IResolvable snatIp) {
            this.snatIp = snatIp;
            return this;
        }

        /**
         * Sets the value of {@link SnatEntryProps#getSnatTableId}
         * @param snatTableId Property snatTableId: The ID of the SNAT table. This parameter is required.
         * @return {@code this}
         */
        public Builder snatTableId(java.lang.String snatTableId) {
            this.snatTableId = snatTableId;
            return this;
        }

        /**
         * Sets the value of {@link SnatEntryProps#getSnatTableId}
         * @param snatTableId Property snatTableId: The ID of the SNAT table. This parameter is required.
         * @return {@code this}
         */
        public Builder snatTableId(com.aliyun.ros.cdk.core.IResolvable snatTableId) {
            this.snatTableId = snatTableId;
            return this;
        }

        /**
         * Sets the value of {@link SnatEntryProps#getSnatEntryName}
         * @param snatEntryName Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
         * @return {@code this}
         */
        public Builder snatEntryName(java.lang.String snatEntryName) {
            this.snatEntryName = snatEntryName;
            return this;
        }

        /**
         * Sets the value of {@link SnatEntryProps#getSnatEntryName}
         * @param snatEntryName Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
         * @return {@code this}
         */
        public Builder snatEntryName(com.aliyun.ros.cdk.core.IResolvable snatEntryName) {
            this.snatEntryName = snatEntryName;
            return this;
        }

        /**
         * Sets the value of {@link SnatEntryProps#getSourceCidr}
         * @param sourceCidr Property sourceCidr: Specifies the network segment of the switch.
         *                   For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
         * @return {@code this}
         */
        public Builder sourceCidr(java.lang.String sourceCidr) {
            this.sourceCidr = sourceCidr;
            return this;
        }

        /**
         * Sets the value of {@link SnatEntryProps#getSourceCidr}
         * @param sourceCidr Property sourceCidr: Specifies the network segment of the switch.
         *                   For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
         * @return {@code this}
         */
        public Builder sourceCidr(com.aliyun.ros.cdk.core.IResolvable sourceCidr) {
            this.sourceCidr = sourceCidr;
            return this;
        }

        /**
         * Sets the value of {@link SnatEntryProps#getSourceVSwitchIds}
         * @param sourceVSwitchIds Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
         * @return {@code this}
         */
        public Builder sourceVSwitchIds(java.util.List<? extends java.lang.Object> sourceVSwitchIds) {
            this.sourceVSwitchIds = sourceVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link SnatEntryProps#getSourceVSwitchIds}
         * @param sourceVSwitchIds Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
         * @return {@code this}
         */
        public Builder sourceVSwitchIds(com.aliyun.ros.cdk.core.IResolvable sourceVSwitchIds) {
            this.sourceVSwitchIds = sourceVSwitchIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SnatEntryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SnatEntryProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SnatEntryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SnatEntryProps {
        private final java.lang.Object snatIp;
        private final java.lang.Object snatTableId;
        private final java.lang.Object snatEntryName;
        private final java.lang.Object sourceCidr;
        private final java.lang.Object sourceVSwitchIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.snatIp = software.amazon.jsii.Kernel.get(this, "snatIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snatTableId = software.amazon.jsii.Kernel.get(this, "snatTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snatEntryName = software.amazon.jsii.Kernel.get(this, "snatEntryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceCidr = software.amazon.jsii.Kernel.get(this, "sourceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceVSwitchIds = software.amazon.jsii.Kernel.get(this, "sourceVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.snatIp = java.util.Objects.requireNonNull(builder.snatIp, "snatIp is required");
            this.snatTableId = java.util.Objects.requireNonNull(builder.snatTableId, "snatTableId is required");
            this.snatEntryName = builder.snatEntryName;
            this.sourceCidr = builder.sourceCidr;
            this.sourceVSwitchIds = builder.sourceVSwitchIds;
        }

        @Override
        public final java.lang.Object getSnatIp() {
            return this.snatIp;
        }

        @Override
        public final java.lang.Object getSnatTableId() {
            return this.snatTableId;
        }

        @Override
        public final java.lang.Object getSnatEntryName() {
            return this.snatEntryName;
        }

        @Override
        public final java.lang.Object getSourceCidr() {
            return this.sourceCidr;
        }

        @Override
        public final java.lang.Object getSourceVSwitchIds() {
            return this.sourceVSwitchIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("snatIp", om.valueToTree(this.getSnatIp()));
            data.set("snatTableId", om.valueToTree(this.getSnatTableId()));
            if (this.getSnatEntryName() != null) {
                data.set("snatEntryName", om.valueToTree(this.getSnatEntryName()));
            }
            if (this.getSourceCidr() != null) {
                data.set("sourceCidr", om.valueToTree(this.getSourceCidr()));
            }
            if (this.getSourceVSwitchIds() != null) {
                data.set("sourceVSwitchIds", om.valueToTree(this.getSourceVSwitchIds()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.SnatEntryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SnatEntryProps.Jsii$Proxy that = (SnatEntryProps.Jsii$Proxy) o;

            if (!snatIp.equals(that.snatIp)) return false;
            if (!snatTableId.equals(that.snatTableId)) return false;
            if (this.snatEntryName != null ? !this.snatEntryName.equals(that.snatEntryName) : that.snatEntryName != null) return false;
            if (this.sourceCidr != null ? !this.sourceCidr.equals(that.sourceCidr) : that.sourceCidr != null) return false;
            return this.sourceVSwitchIds != null ? this.sourceVSwitchIds.equals(that.sourceVSwitchIds) : that.sourceVSwitchIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.snatIp.hashCode();
            result = 31 * result + (this.snatTableId.hashCode());
            result = 31 * result + (this.snatEntryName != null ? this.snatEntryName.hashCode() : 0);
            result = 31 * result + (this.sourceCidr != null ? this.sourceCidr.hashCode() : 0);
            result = 31 * result + (this.sourceVSwitchIds != null ? this.sourceVSwitchIds.hashCode() : 0);
            return result;
        }
    }
}
