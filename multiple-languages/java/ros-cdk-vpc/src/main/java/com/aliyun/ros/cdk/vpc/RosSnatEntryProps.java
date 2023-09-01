package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>ALIYUN::VPC::SnatEntry</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:40.301Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosSnatEntryProps")
@software.amazon.jsii.Jsii.Proxy(RosSnatEntryProps.Jsii$Proxy.class)
public interface RosSnatEntryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSnatIp();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSnatTableId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEipAffinity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnatEntryName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceCidr() {
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
        java.lang.Object snatIp;
        java.lang.Object snatTableId;
        java.lang.Object eipAffinity;
        java.lang.Object snatEntryName;
        java.lang.Object sourceCidr;
        java.lang.Object sourceVSwitchIds;

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
         * Sets the value of {@link RosSnatEntryProps#getSnatIp}
         * @param snatIp the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder snatIp(com.aliyun.ros.cdk.core.IResolvable snatIp) {
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
         * Sets the value of {@link RosSnatEntryProps#getSnatTableId}
         * @param snatTableId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder snatTableId(com.aliyun.ros.cdk.core.IResolvable snatTableId) {
            this.snatTableId = snatTableId;
            return this;
        }

        /**
         * Sets the value of {@link RosSnatEntryProps#getEipAffinity}
         * @param eipAffinity the value to be set.
         * @return {@code this}
         */
        public Builder eipAffinity(java.lang.Number eipAffinity) {
            this.eipAffinity = eipAffinity;
            return this;
        }

        /**
         * Sets the value of {@link RosSnatEntryProps#getEipAffinity}
         * @param eipAffinity the value to be set.
         * @return {@code this}
         */
        public Builder eipAffinity(com.aliyun.ros.cdk.core.IResolvable eipAffinity) {
            this.eipAffinity = eipAffinity;
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
         * Sets the value of {@link RosSnatEntryProps#getSnatEntryName}
         * @param snatEntryName the value to be set.
         * @return {@code this}
         */
        public Builder snatEntryName(com.aliyun.ros.cdk.core.IResolvable snatEntryName) {
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
         * Sets the value of {@link RosSnatEntryProps#getSourceCidr}
         * @param sourceCidr the value to be set.
         * @return {@code this}
         */
        public Builder sourceCidr(com.aliyun.ros.cdk.core.IResolvable sourceCidr) {
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
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSnatEntryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSnatEntryProps {
        private final java.lang.Object snatIp;
        private final java.lang.Object snatTableId;
        private final java.lang.Object eipAffinity;
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
            this.eipAffinity = software.amazon.jsii.Kernel.get(this, "eipAffinity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.eipAffinity = builder.eipAffinity;
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
        public final java.lang.Object getEipAffinity() {
            return this.eipAffinity;
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
            if (this.getEipAffinity() != null) {
                data.set("eipAffinity", om.valueToTree(this.getEipAffinity()));
            }
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
            if (this.eipAffinity != null ? !this.eipAffinity.equals(that.eipAffinity) : that.eipAffinity != null) return false;
            if (this.snatEntryName != null ? !this.snatEntryName.equals(that.snatEntryName) : that.snatEntryName != null) return false;
            if (this.sourceCidr != null ? !this.sourceCidr.equals(that.sourceCidr) : that.sourceCidr != null) return false;
            return this.sourceVSwitchIds != null ? this.sourceVSwitchIds.equals(that.sourceVSwitchIds) : that.sourceVSwitchIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.snatIp.hashCode();
            result = 31 * result + (this.snatTableId.hashCode());
            result = 31 * result + (this.eipAffinity != null ? this.eipAffinity.hashCode() : 0);
            result = 31 * result + (this.snatEntryName != null ? this.snatEntryName.hashCode() : 0);
            result = 31 * result + (this.sourceCidr != null ? this.sourceCidr.hashCode() : 0);
            result = 31 * result + (this.sourceVSwitchIds != null ? this.sourceVSwitchIds.hashCode() : 0);
            return result;
        }
    }
}
