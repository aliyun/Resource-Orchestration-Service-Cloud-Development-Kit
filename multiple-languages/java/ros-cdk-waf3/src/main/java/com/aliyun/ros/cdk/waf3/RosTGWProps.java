package com.aliyun.ros.cdk.waf3;

/**
 * Properties for defining a <code>RosTGW</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-tgw
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:43.498Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf3.$Module.class, fqn = "@alicloud/ros-cdk-waf3.RosTGWProps")
@software.amazon.jsii.Jsii.Proxy(RosTGWProps.Jsii$Proxy.class)
public interface RosTGWProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListen();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRedirect() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTGWProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTGWProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTGWProps> {
        java.lang.Object instanceId;
        java.lang.Object listen;
        java.lang.Object redirect;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link RosTGWProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosTGWProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosTGWProps#getListen}
         * @param listen the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listen(com.aliyun.ros.cdk.core.IResolvable listen) {
            this.listen = listen;
            return this;
        }

        /**
         * Sets the value of {@link RosTGWProps#getListen}
         * @param listen the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listen(com.aliyun.ros.cdk.waf3.RosTGW.ListenProperty listen) {
            this.listen = listen;
            return this;
        }

        /**
         * Sets the value of {@link RosTGWProps#getRedirect}
         * @param redirect the value to be set.
         * @return {@code this}
         */
        public Builder redirect(com.aliyun.ros.cdk.core.IResolvable redirect) {
            this.redirect = redirect;
            return this;
        }

        /**
         * Sets the value of {@link RosTGWProps#getRedirect}
         * @param redirect the value to be set.
         * @return {@code this}
         */
        public Builder redirect(com.aliyun.ros.cdk.waf3.RosTGW.RedirectProperty redirect) {
            this.redirect = redirect;
            return this;
        }

        /**
         * Sets the value of {@link RosTGWProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosTGWProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTGWProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTGWProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTGWProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTGWProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object listen;
        private final java.lang.Object redirect;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listen = software.amazon.jsii.Kernel.get(this, "listen", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.redirect = software.amazon.jsii.Kernel.get(this, "redirect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.listen = java.util.Objects.requireNonNull(builder.listen, "listen is required");
            this.redirect = builder.redirect;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getListen() {
            return this.listen;
        }

        @Override
        public final java.lang.Object getRedirect() {
            return this.redirect;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("listen", om.valueToTree(this.getListen()));
            if (this.getRedirect() != null) {
                data.set("redirect", om.valueToTree(this.getRedirect()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-waf3.RosTGWProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTGWProps.Jsii$Proxy that = (RosTGWProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!listen.equals(that.listen)) return false;
            if (this.redirect != null ? !this.redirect.equals(that.redirect) : that.redirect != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.listen.hashCode());
            result = 31 * result + (this.redirect != null ? this.redirect.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
