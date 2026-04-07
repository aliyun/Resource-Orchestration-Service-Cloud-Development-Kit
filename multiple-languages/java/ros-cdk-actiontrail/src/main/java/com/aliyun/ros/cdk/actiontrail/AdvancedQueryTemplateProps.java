package com.aliyun.ros.cdk.actiontrail;

/**
 * Properties for defining a <code>AdvancedQueryTemplate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-advancedquerytemplate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:21.034Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.actiontrail.$Module.class, fqn = "@alicloud/ros-cdk-actiontrail.AdvancedQueryTemplateProps")
@software.amazon.jsii.Jsii.Proxy(AdvancedQueryTemplateProps.Jsii$Proxy.class)
public interface AdvancedQueryTemplateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property simpleQuery: Indicates whether the template is a simple query.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSimpleQuery();

    /**
     * Property templateSql: The SQL statement of the advanced query template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTemplateSql();

    /**
     * Property templateName: The name of the advanced query template.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AdvancedQueryTemplateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AdvancedQueryTemplateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AdvancedQueryTemplateProps> {
        java.lang.Object simpleQuery;
        java.lang.Object templateSql;
        java.lang.Object templateName;

        /**
         * Sets the value of {@link AdvancedQueryTemplateProps#getSimpleQuery}
         * @param simpleQuery Property simpleQuery: Indicates whether the template is a simple query. This parameter is required.
         * @return {@code this}
         */
        public Builder simpleQuery(java.lang.Boolean simpleQuery) {
            this.simpleQuery = simpleQuery;
            return this;
        }

        /**
         * Sets the value of {@link AdvancedQueryTemplateProps#getSimpleQuery}
         * @param simpleQuery Property simpleQuery: Indicates whether the template is a simple query. This parameter is required.
         * @return {@code this}
         */
        public Builder simpleQuery(com.aliyun.ros.cdk.core.IResolvable simpleQuery) {
            this.simpleQuery = simpleQuery;
            return this;
        }

        /**
         * Sets the value of {@link AdvancedQueryTemplateProps#getTemplateSql}
         * @param templateSql Property templateSql: The SQL statement of the advanced query template. This parameter is required.
         * @return {@code this}
         */
        public Builder templateSql(java.lang.String templateSql) {
            this.templateSql = templateSql;
            return this;
        }

        /**
         * Sets the value of {@link AdvancedQueryTemplateProps#getTemplateSql}
         * @param templateSql Property templateSql: The SQL statement of the advanced query template. This parameter is required.
         * @return {@code this}
         */
        public Builder templateSql(com.aliyun.ros.cdk.core.IResolvable templateSql) {
            this.templateSql = templateSql;
            return this;
        }

        /**
         * Sets the value of {@link AdvancedQueryTemplateProps#getTemplateName}
         * @param templateName Property templateName: The name of the advanced query template.
         * @return {@code this}
         */
        public Builder templateName(java.lang.String templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Sets the value of {@link AdvancedQueryTemplateProps#getTemplateName}
         * @param templateName Property templateName: The name of the advanced query template.
         * @return {@code this}
         */
        public Builder templateName(com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AdvancedQueryTemplateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AdvancedQueryTemplateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AdvancedQueryTemplateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AdvancedQueryTemplateProps {
        private final java.lang.Object simpleQuery;
        private final java.lang.Object templateSql;
        private final java.lang.Object templateName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.simpleQuery = software.amazon.jsii.Kernel.get(this, "simpleQuery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateSql = software.amazon.jsii.Kernel.get(this, "templateSql", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateName = software.amazon.jsii.Kernel.get(this, "templateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.simpleQuery = java.util.Objects.requireNonNull(builder.simpleQuery, "simpleQuery is required");
            this.templateSql = java.util.Objects.requireNonNull(builder.templateSql, "templateSql is required");
            this.templateName = builder.templateName;
        }

        @Override
        public final java.lang.Object getSimpleQuery() {
            return this.simpleQuery;
        }

        @Override
        public final java.lang.Object getTemplateSql() {
            return this.templateSql;
        }

        @Override
        public final java.lang.Object getTemplateName() {
            return this.templateName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("simpleQuery", om.valueToTree(this.getSimpleQuery()));
            data.set("templateSql", om.valueToTree(this.getTemplateSql()));
            if (this.getTemplateName() != null) {
                data.set("templateName", om.valueToTree(this.getTemplateName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-actiontrail.AdvancedQueryTemplateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AdvancedQueryTemplateProps.Jsii$Proxy that = (AdvancedQueryTemplateProps.Jsii$Proxy) o;

            if (!simpleQuery.equals(that.simpleQuery)) return false;
            if (!templateSql.equals(that.templateSql)) return false;
            return this.templateName != null ? this.templateName.equals(that.templateName) : that.templateName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.simpleQuery.hashCode();
            result = 31 * result + (this.templateSql.hashCode());
            result = 31 * result + (this.templateName != null ? this.templateName.hashCode() : 0);
            return result;
        }
    }
}
