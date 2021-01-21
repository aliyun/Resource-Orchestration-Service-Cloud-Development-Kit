package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::SnatEntry`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:03.643Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosSnatEntryProps")
@software.amazon.jsii.Jsii.Proxy(RosSnatEntryProps.Jsii$Proxy.class)
public interface RosSnatEntryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSnatIp();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSnatTableId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSnatEntryName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSourceCidr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceVSwitchIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSnatEntryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSnatEntryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSnatEntryProps> {
        private java.lang.String snatIp;
        private java.lang.String snatTableId;
        private java.lang.String snatEntryName;
        private java.lang.String sourceCidr;
        private java.lang.Object sourceVSwitchIds;

        /**
         * Sets the value of {@link RosSnatEntryProps#getSnatIp}
         * @param snatIp the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder snatIp(java.lang.String snatIp) {
            this.snatIp = snatIp;
            return this;
        }

        /**
         * Sets the value of {@link RosSnatEntryProps#getSnatTableId}
         * @param snatTableId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder snatTableId(java.lang.String snatTableId) {
            this.snatTableId = snatTableId;
            return this;
        }

        /**
         * Sets the value of {@link RosSnatEntryProps#getSnatEntryName}
         * @param snatEntryName the value to be set.
         * @return {@code this}
         */
        public Builder snatEntryName(java.lang.String snatEntryName) {
            this.snatEntryName = snatEntryName;
            return this;
        }

        /**
         * Sets the value of {@link RosSnatEntryProps#getSourceCidr}
         * @param sourceCidr the value to be set.
         * @return {@code this}
         */
        public Builder sourceCidr(java.lang.String sourceCidr) {
            this.sourceCidr = sourceCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosSnatEntryProps#getSourceVSwitchIds}
         * @param sourceVSwitchIds the value to be set.
         * @return {@code this}
         */
        public Builder sourceVSwitchIds(java.util.List<? extends java.lang.Object> sourceVSwitchIds) {
            this.sourceVSwitchIds = sourceVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link RosSnatEntryProps#getSourceVSwitchIds}
         * @param sourceVSwitchIds the value to be set.
         * @return {@code this}
         */
        public Builder sourceVSwitchIds(com.aliyun.ros.cdk.core.IResolvable sourceVSwitchIds) {
            this.sourceVSwitchIds = sourceVSwitchIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSnatEntryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSnatEntryProps build() {
            return new Jsii$Proxy(snatIp, snatTableId, snatEntryName, sourceCidr, sourceVSwitchIds);
        }
    }

    /**
     * An implementation for {@link RosSnatEntryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSnatEntryProps {
        private final java.lang.String snatIp;
        private final java.lang.String snatTableId;
        private final java.lang.String snatEntryName;
        private final java.lang.String sourceCidr;
        private final java.lang.Object sourceVSwitchIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.snatIp = software.amazon.jsii.Kernel.get(this, "snatIp", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.snatTableId = software.amazon.jsii.Kernel.get(this, "snatTableId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.snatEntryName = software.amazon.jsii.Kernel.get(this, "snatEntryName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceCidr = software.amazon.jsii.Kernel.get(this, "sourceCidr", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceVSwitchIds = software.amazon.jsii.Kernel.get(this, "sourceVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String snatIp, final java.lang.String snatTableId, final java.lang.String snatEntryName, final java.lang.String sourceCidr, final java.lang.Object sourceVSwitchIds) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.snatIp = java.util.Objects.requireNonNull(snatIp, "snatIp is required");
            this.snatTableId = java.util.Objects.requireNonNull(snatTableId, "snatTableId is required");
            this.snatEntryName = snatEntryName;
            this.sourceCidr = sourceCidr;
            this.sourceVSwitchIds = sourceVSwitchIds;
        }

        @Override
        public final java.lang.String getSnatIp() {
            return this.snatIp;
        }

        @Override
        public final java.lang.String getSnatTableId() {
            return this.snatTableId;
        }

        @Override
        public final java.lang.String getSnatEntryName() {
            return this.snatEntryName;
        }

        @Override
        public final java.lang.String getSourceCidr() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosSnatEntryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSnatEntryProps.Jsii$Proxy that = (RosSnatEntryProps.Jsii$Proxy) o;

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
