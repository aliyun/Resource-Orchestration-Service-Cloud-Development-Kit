package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a `ALIYUN::SAG::GrantCcnToCen`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.549Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.GrantCcnToCenProps")
@software.amazon.jsii.Jsii.Proxy(GrantCcnToCenProps.Jsii$Proxy.class)
public interface GrantCcnToCenProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getCcnInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getCenInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getCenUid();

    /**
     * @return a {@link Builder} of {@link GrantCcnToCenProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link GrantCcnToCenProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<GrantCcnToCenProps> {
        private java.lang.String ccnInstanceId;
        private java.lang.String cenInstanceId;
        private java.lang.String cenUid;

        /**
         * Sets the value of {@link GrantCcnToCenProps#getCcnInstanceId}
         * @param ccnInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ccnInstanceId(java.lang.String ccnInstanceId) {
            this.ccnInstanceId = ccnInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link GrantCcnToCenProps#getCenInstanceId}
         * @param cenInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenInstanceId(java.lang.String cenInstanceId) {
            this.cenInstanceId = cenInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link GrantCcnToCenProps#getCenUid}
         * @param cenUid the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenUid(java.lang.String cenUid) {
            this.cenUid = cenUid;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link GrantCcnToCenProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public GrantCcnToCenProps build() {
            return new Jsii$Proxy(ccnInstanceId, cenInstanceId, cenUid);
        }
    }

    /**
     * An implementation for {@link GrantCcnToCenProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GrantCcnToCenProps {
        private final java.lang.String ccnInstanceId;
        private final java.lang.String cenInstanceId;
        private final java.lang.String cenUid;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ccnInstanceId = software.amazon.jsii.Kernel.get(this, "ccnInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.cenInstanceId = software.amazon.jsii.Kernel.get(this, "cenInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.cenUid = software.amazon.jsii.Kernel.get(this, "cenUid", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String ccnInstanceId, final java.lang.String cenInstanceId, final java.lang.String cenUid) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ccnInstanceId = java.util.Objects.requireNonNull(ccnInstanceId, "ccnInstanceId is required");
            this.cenInstanceId = java.util.Objects.requireNonNull(cenInstanceId, "cenInstanceId is required");
            this.cenUid = java.util.Objects.requireNonNull(cenUid, "cenUid is required");
        }

        @Override
        public final java.lang.String getCcnInstanceId() {
            return this.ccnInstanceId;
        }

        @Override
        public final java.lang.String getCenInstanceId() {
            return this.cenInstanceId;
        }

        @Override
        public final java.lang.String getCenUid() {
            return this.cenUid;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ccnInstanceId", om.valueToTree(this.getCcnInstanceId()));
            data.set("cenInstanceId", om.valueToTree(this.getCenInstanceId()));
            data.set("cenUid", om.valueToTree(this.getCenUid()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.GrantCcnToCenProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            GrantCcnToCenProps.Jsii$Proxy that = (GrantCcnToCenProps.Jsii$Proxy) o;

            if (!ccnInstanceId.equals(that.ccnInstanceId)) return false;
            if (!cenInstanceId.equals(that.cenInstanceId)) return false;
            return this.cenUid.equals(that.cenUid);
        }

        @Override
        public final int hashCode() {
            int result = this.ccnInstanceId.hashCode();
            result = 31 * result + (this.cenInstanceId.hashCode());
            result = 31 * result + (this.cenUid.hashCode());
            return result;
        }
    }
}
