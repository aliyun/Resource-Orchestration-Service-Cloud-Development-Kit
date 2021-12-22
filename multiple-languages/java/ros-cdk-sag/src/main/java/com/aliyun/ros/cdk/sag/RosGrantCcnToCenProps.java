package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a `ALIYUN::SAG::GrantCcnToCen`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:58.766Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.RosGrantCcnToCenProps")
@software.amazon.jsii.Jsii.Proxy(RosGrantCcnToCenProps.Jsii$Proxy.class)
public interface RosGrantCcnToCenProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCcnInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenUid();

    /**
     * @return a {@link Builder} of {@link RosGrantCcnToCenProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGrantCcnToCenProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGrantCcnToCenProps> {
        java.lang.Object ccnInstanceId;
        java.lang.Object cenInstanceId;
        java.lang.Object cenUid;

        /**
         * Sets the value of {@link RosGrantCcnToCenProps#getCcnInstanceId}
         * @param ccnInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ccnInstanceId(java.lang.String ccnInstanceId) {
            this.ccnInstanceId = ccnInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosGrantCcnToCenProps#getCcnInstanceId}
         * @param ccnInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ccnInstanceId(com.aliyun.ros.cdk.core.IResolvable ccnInstanceId) {
            this.ccnInstanceId = ccnInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosGrantCcnToCenProps#getCenInstanceId}
         * @param cenInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenInstanceId(java.lang.String cenInstanceId) {
            this.cenInstanceId = cenInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosGrantCcnToCenProps#getCenInstanceId}
         * @param cenInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenInstanceId(com.aliyun.ros.cdk.core.IResolvable cenInstanceId) {
            this.cenInstanceId = cenInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosGrantCcnToCenProps#getCenUid}
         * @param cenUid the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenUid(java.lang.String cenUid) {
            this.cenUid = cenUid;
            return this;
        }

        /**
         * Sets the value of {@link RosGrantCcnToCenProps#getCenUid}
         * @param cenUid the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenUid(com.aliyun.ros.cdk.core.IResolvable cenUid) {
            this.cenUid = cenUid;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGrantCcnToCenProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGrantCcnToCenProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGrantCcnToCenProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGrantCcnToCenProps {
        private final java.lang.Object ccnInstanceId;
        private final java.lang.Object cenInstanceId;
        private final java.lang.Object cenUid;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ccnInstanceId = software.amazon.jsii.Kernel.get(this, "ccnInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenInstanceId = software.amazon.jsii.Kernel.get(this, "cenInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenUid = software.amazon.jsii.Kernel.get(this, "cenUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ccnInstanceId = java.util.Objects.requireNonNull(builder.ccnInstanceId, "ccnInstanceId is required");
            this.cenInstanceId = java.util.Objects.requireNonNull(builder.cenInstanceId, "cenInstanceId is required");
            this.cenUid = java.util.Objects.requireNonNull(builder.cenUid, "cenUid is required");
        }

        @Override
        public final java.lang.Object getCcnInstanceId() {
            return this.ccnInstanceId;
        }

        @Override
        public final java.lang.Object getCenInstanceId() {
            return this.cenInstanceId;
        }

        @Override
        public final java.lang.Object getCenUid() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.RosGrantCcnToCenProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGrantCcnToCenProps.Jsii$Proxy that = (RosGrantCcnToCenProps.Jsii$Proxy) o;

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
