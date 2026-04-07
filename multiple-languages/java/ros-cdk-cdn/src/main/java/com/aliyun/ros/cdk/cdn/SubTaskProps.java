package com.aliyun.ros.cdk.cdn;

/**
 * Properties for defining a <code>SubTask</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-subtask
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:22.298Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.SubTaskProps")
@software.amazon.jsii.Jsii.Proxy(SubTaskProps.Jsii$Proxy.class)
public interface SubTaskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property reportIds: The report IDs.
     * <p>
     * The value can be up to 128 bytes in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReportIds();

    /**
     * Property domainName: The domain name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SubTaskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SubTaskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SubTaskProps> {
        java.lang.Object reportIds;
        java.lang.Object domainName;

        /**
         * Sets the value of {@link SubTaskProps#getReportIds}
         * @param reportIds Property reportIds: The report IDs. This parameter is required.
         *                  The value can be up to 128 bytes in length.
         * @return {@code this}
         */
        public Builder reportIds(com.aliyun.ros.cdk.core.IResolvable reportIds) {
            this.reportIds = reportIds;
            return this;
        }

        /**
         * Sets the value of {@link SubTaskProps#getReportIds}
         * @param reportIds Property reportIds: The report IDs. This parameter is required.
         *                  The value can be up to 128 bytes in length.
         * @return {@code this}
         */
        public Builder reportIds(java.util.List<? extends java.lang.Object> reportIds) {
            this.reportIds = reportIds;
            return this;
        }

        /**
         * Sets the value of {@link SubTaskProps#getDomainName}
         * @param domainName Property domainName: The domain name.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link SubTaskProps#getDomainName}
         * @param domainName Property domainName: The domain name.
         * @return {@code this}
         */
        public Builder domainName(com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SubTaskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SubTaskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SubTaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SubTaskProps {
        private final java.lang.Object reportIds;
        private final java.lang.Object domainName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.reportIds = software.amazon.jsii.Kernel.get(this, "reportIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.reportIds = java.util.Objects.requireNonNull(builder.reportIds, "reportIds is required");
            this.domainName = builder.domainName;
        }

        @Override
        public final java.lang.Object getReportIds() {
            return this.reportIds;
        }

        @Override
        public final java.lang.Object getDomainName() {
            return this.domainName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("reportIds", om.valueToTree(this.getReportIds()));
            if (this.getDomainName() != null) {
                data.set("domainName", om.valueToTree(this.getDomainName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cdn.SubTaskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SubTaskProps.Jsii$Proxy that = (SubTaskProps.Jsii$Proxy) o;

            if (!reportIds.equals(that.reportIds)) return false;
            return this.domainName != null ? this.domainName.equals(that.domainName) : that.domainName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.reportIds.hashCode();
            result = 31 * result + (this.domainName != null ? this.domainName.hashCode() : 0);
            return result;
        }
    }
}
