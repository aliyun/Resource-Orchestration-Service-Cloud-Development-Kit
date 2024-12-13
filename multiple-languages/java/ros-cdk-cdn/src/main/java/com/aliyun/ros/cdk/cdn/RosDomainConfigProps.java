package com.aliyun.ros.cdk.cdn;

/**
 * Properties for defining a <code>RosDomainConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:05.003Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.RosDomainConfigProps")
@software.amazon.jsii.Jsii.Proxy(RosDomainConfigProps.Jsii$Proxy.class)
public interface RosDomainConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainNames();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFunctionList() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDomainConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDomainConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDomainConfigProps> {
        java.lang.Object domainNames;
        java.lang.Object functionList;

        /**
         * Sets the value of {@link RosDomainConfigProps#getDomainNames}
         * @param domainNames the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainNames(java.lang.String domainNames) {
            this.domainNames = domainNames;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainConfigProps#getDomainNames}
         * @param domainNames the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainNames(com.aliyun.ros.cdk.core.IResolvable domainNames) {
            this.domainNames = domainNames;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainConfigProps#getFunctionList}
         * @param functionList the value to be set.
         * @return {@code this}
         */
        public Builder functionList(com.aliyun.ros.cdk.core.IResolvable functionList) {
            this.functionList = functionList;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainConfigProps#getFunctionList}
         * @param functionList the value to be set.
         * @return {@code this}
         */
        public Builder functionList(java.util.List<? extends java.lang.Object> functionList) {
            this.functionList = functionList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDomainConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDomainConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDomainConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDomainConfigProps {
        private final java.lang.Object domainNames;
        private final java.lang.Object functionList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainNames = software.amazon.jsii.Kernel.get(this, "domainNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.functionList = software.amazon.jsii.Kernel.get(this, "functionList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainNames = java.util.Objects.requireNonNull(builder.domainNames, "domainNames is required");
            this.functionList = builder.functionList;
        }

        @Override
        public final java.lang.Object getDomainNames() {
            return this.domainNames;
        }

        @Override
        public final java.lang.Object getFunctionList() {
            return this.functionList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domainNames", om.valueToTree(this.getDomainNames()));
            if (this.getFunctionList() != null) {
                data.set("functionList", om.valueToTree(this.getFunctionList()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cdn.RosDomainConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDomainConfigProps.Jsii$Proxy that = (RosDomainConfigProps.Jsii$Proxy) o;

            if (!domainNames.equals(that.domainNames)) return false;
            return this.functionList != null ? this.functionList.equals(that.functionList) : that.functionList == null;
        }

        @Override
        public final int hashCode() {
            int result = this.domainNames.hashCode();
            result = 31 * result + (this.functionList != null ? this.functionList.hashCode() : 0);
            return result;
        }
    }
}
