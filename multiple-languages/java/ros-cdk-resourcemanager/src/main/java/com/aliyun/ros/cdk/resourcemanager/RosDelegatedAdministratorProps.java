package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a <code>RosDelegatedAdministrator</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:29.508Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosDelegatedAdministratorProps")
@software.amazon.jsii.Jsii.Proxy(RosDelegatedAdministratorProps.Jsii$Proxy.class)
public interface RosDelegatedAdministratorProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServicePrincipal();

    /**
     * @return a {@link Builder} of {@link RosDelegatedAdministratorProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDelegatedAdministratorProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDelegatedAdministratorProps> {
        java.lang.Object accountId;
        java.lang.Object servicePrincipal;

        /**
         * Sets the value of {@link RosDelegatedAdministratorProps#getAccountId}
         * @param accountId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountId(java.lang.String accountId) {
            this.accountId = accountId;
            return this;
        }

        /**
         * Sets the value of {@link RosDelegatedAdministratorProps#getAccountId}
         * @param accountId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountId(com.aliyun.ros.cdk.core.IResolvable accountId) {
            this.accountId = accountId;
            return this;
        }

        /**
         * Sets the value of {@link RosDelegatedAdministratorProps#getServicePrincipal}
         * @param servicePrincipal the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder servicePrincipal(java.lang.String servicePrincipal) {
            this.servicePrincipal = servicePrincipal;
            return this;
        }

        /**
         * Sets the value of {@link RosDelegatedAdministratorProps#getServicePrincipal}
         * @param servicePrincipal the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder servicePrincipal(com.aliyun.ros.cdk.core.IResolvable servicePrincipal) {
            this.servicePrincipal = servicePrincipal;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDelegatedAdministratorProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDelegatedAdministratorProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDelegatedAdministratorProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDelegatedAdministratorProps {
        private final java.lang.Object accountId;
        private final java.lang.Object servicePrincipal;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountId = software.amazon.jsii.Kernel.get(this, "accountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.servicePrincipal = software.amazon.jsii.Kernel.get(this, "servicePrincipal", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountId = java.util.Objects.requireNonNull(builder.accountId, "accountId is required");
            this.servicePrincipal = java.util.Objects.requireNonNull(builder.servicePrincipal, "servicePrincipal is required");
        }

        @Override
        public final java.lang.Object getAccountId() {
            return this.accountId;
        }

        @Override
        public final java.lang.Object getServicePrincipal() {
            return this.servicePrincipal;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accountId", om.valueToTree(this.getAccountId()));
            data.set("servicePrincipal", om.valueToTree(this.getServicePrincipal()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.RosDelegatedAdministratorProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDelegatedAdministratorProps.Jsii$Proxy that = (RosDelegatedAdministratorProps.Jsii$Proxy) o;

            if (!accountId.equals(that.accountId)) return false;
            return this.servicePrincipal.equals(that.servicePrincipal);
        }

        @Override
        public final int hashCode() {
            int result = this.accountId.hashCode();
            result = 31 * result + (this.servicePrincipal.hashCode());
            return result;
        }
    }
}
