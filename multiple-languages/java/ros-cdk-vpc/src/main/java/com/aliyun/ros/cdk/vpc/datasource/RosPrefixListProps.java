package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosPrefixList</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:12.936Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosPrefixListProps")
@software.amazon.jsii.Jsii.Proxy(RosPrefixListProps.Jsii$Proxy.class)
public interface RosPrefixListProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrefixListId();

    /**
     * @return a {@link Builder} of {@link RosPrefixListProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPrefixListProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPrefixListProps> {
        java.lang.Object prefixListId;

        /**
         * Sets the value of {@link RosPrefixListProps#getPrefixListId}
         * @param prefixListId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder prefixListId(java.lang.String prefixListId) {
            this.prefixListId = prefixListId;
            return this;
        }

        /**
         * Sets the value of {@link RosPrefixListProps#getPrefixListId}
         * @param prefixListId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder prefixListId(com.aliyun.ros.cdk.core.IResolvable prefixListId) {
            this.prefixListId = prefixListId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPrefixListProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPrefixListProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPrefixListProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPrefixListProps {
        private final java.lang.Object prefixListId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.prefixListId = software.amazon.jsii.Kernel.get(this, "prefixListId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.prefixListId = java.util.Objects.requireNonNull(builder.prefixListId, "prefixListId is required");
        }

        @Override
        public final java.lang.Object getPrefixListId() {
            return this.prefixListId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("prefixListId", om.valueToTree(this.getPrefixListId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosPrefixListProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPrefixListProps.Jsii$Proxy that = (RosPrefixListProps.Jsii$Proxy) o;

            return this.prefixListId.equals(that.prefixListId);
        }

        @Override
        public final int hashCode() {
            int result = this.prefixListId.hashCode();
            return result;
        }
    }
}
