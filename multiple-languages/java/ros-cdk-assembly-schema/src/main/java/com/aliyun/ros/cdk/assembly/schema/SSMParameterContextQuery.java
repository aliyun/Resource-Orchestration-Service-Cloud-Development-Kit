package com.aliyun.ros.cdk.assembly.schema;

/**
 * Query to SSM Parameter Context Provider.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:27:59.351Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.SSMParameterContextQuery")
@software.amazon.jsii.Jsii.Proxy(SSMParameterContextQuery.Jsii$Proxy.class)
public interface SSMParameterContextQuery extends software.amazon.jsii.JsiiSerializable {

    /**
     * Query account.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccount();

    /**
     * Parameter name to query.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getParameterName();

    /**
     * Query region.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRegion();

    /**
     * @return a {@link Builder} of {@link SSMParameterContextQuery}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SSMParameterContextQuery}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SSMParameterContextQuery> {
        java.lang.String account;
        java.lang.String parameterName;
        java.lang.String region;

        /**
         * Sets the value of {@link SSMParameterContextQuery#getAccount}
         * @param account Query account. This parameter is required.
         * @return {@code this}
         */
        public Builder account(java.lang.String account) {
            this.account = account;
            return this;
        }

        /**
         * Sets the value of {@link SSMParameterContextQuery#getParameterName}
         * @param parameterName Parameter name to query. This parameter is required.
         * @return {@code this}
         */
        public Builder parameterName(java.lang.String parameterName) {
            this.parameterName = parameterName;
            return this;
        }

        /**
         * Sets the value of {@link SSMParameterContextQuery#getRegion}
         * @param region Query region. This parameter is required.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SSMParameterContextQuery}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SSMParameterContextQuery build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SSMParameterContextQuery}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SSMParameterContextQuery {
        private final java.lang.String account;
        private final java.lang.String parameterName;
        private final java.lang.String region;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.account = software.amazon.jsii.Kernel.get(this, "account", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.parameterName = software.amazon.jsii.Kernel.get(this, "parameterName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.account = java.util.Objects.requireNonNull(builder.account, "account is required");
            this.parameterName = java.util.Objects.requireNonNull(builder.parameterName, "parameterName is required");
            this.region = java.util.Objects.requireNonNull(builder.region, "region is required");
        }

        @Override
        public final java.lang.String getAccount() {
            return this.account;
        }

        @Override
        public final java.lang.String getParameterName() {
            return this.parameterName;
        }

        @Override
        public final java.lang.String getRegion() {
            return this.region;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("account", om.valueToTree(this.getAccount()));
            data.set("parameterName", om.valueToTree(this.getParameterName()));
            data.set("region", om.valueToTree(this.getRegion()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.SSMParameterContextQuery"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SSMParameterContextQuery.Jsii$Proxy that = (SSMParameterContextQuery.Jsii$Proxy) o;

            if (!account.equals(that.account)) return false;
            if (!parameterName.equals(that.parameterName)) return false;
            return this.region.equals(that.region);
        }

        @Override
        public final int hashCode() {
            int result = this.account.hashCode();
            result = 31 * result + (this.parameterName.hashCode());
            result = 31 * result + (this.region.hashCode());
            return result;
        }
    }
}
