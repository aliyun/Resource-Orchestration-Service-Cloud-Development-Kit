package com.aliyun.ros.cdk.maxcompute;

/**
 * Properties for defining a <code>Table</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:11.868Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.maxcompute.$Module.class, fqn = "@alicloud/ros-cdk-maxcompute.TableProps")
@software.amazon.jsii.Jsii.Proxy(TableProps.Jsii$Proxy.class)
public interface TableProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: Table name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property project: Project name, if not provided, will be the default project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProject();

    /**
     * Property comment: Table comment.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComment() {
        return null;
    }

    /**
     * Property ifNotExists: If you create a table by using the name of an existing table and  the parameter set to false, an error is returned.
     * <p>
     * If you specify the if not exists parameter, a success message
     * is returned when you create a table by using the name of an
     * existing table. The success message is returned even if the
     * schema of the existing table is different from that of the table you want to create.
     * If you create a table by using the name of an existing table,
     * the table is not created and the metadata of the existing table is not changed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIfNotExists() {
        return null;
    }

    /**
     * Property lifecycle: Table's lifecycle.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLifecycle() {
        return null;
    }

    /**
     * Property schema: Table schema.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSchema() {
        return null;
    }

    /**
     * Property stringSchema: Create a table with field names and field type strings.
     * <p>
     * Example: 'num bigint, num2 double', 'pt string'
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStringSchema() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TableProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TableProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TableProps> {
        java.lang.Object name;
        java.lang.Object project;
        java.lang.Object comment;
        java.lang.Object ifNotExists;
        java.lang.Object lifecycle;
        java.lang.Object schema;
        java.lang.Object stringSchema;

        /**
         * Sets the value of {@link TableProps#getName}
         * @param name Property name: Table name. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getName}
         * @param name Property name: Table name. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getProject}
         * @param project Property project: Project name, if not provided, will be the default project. This parameter is required.
         * @return {@code this}
         */
        public Builder project(java.lang.String project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getProject}
         * @param project Property project: Project name, if not provided, will be the default project. This parameter is required.
         * @return {@code this}
         */
        public Builder project(com.aliyun.ros.cdk.core.IResolvable project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getComment}
         * @param comment Property comment: Table comment.
         * @return {@code this}
         */
        public Builder comment(java.lang.String comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getComment}
         * @param comment Property comment: Table comment.
         * @return {@code this}
         */
        public Builder comment(com.aliyun.ros.cdk.core.IResolvable comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getIfNotExists}
         * @param ifNotExists Property ifNotExists: If you create a table by using the name of an existing table and  the parameter set to false, an error is returned.
         *                    If you specify the if not exists parameter, a success message
         *                    is returned when you create a table by using the name of an
         *                    existing table. The success message is returned even if the
         *                    schema of the existing table is different from that of the table you want to create.
         *                    If you create a table by using the name of an existing table,
         *                    the table is not created and the metadata of the existing table is not changed.
         * @return {@code this}
         */
        public Builder ifNotExists(java.lang.Boolean ifNotExists) {
            this.ifNotExists = ifNotExists;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getIfNotExists}
         * @param ifNotExists Property ifNotExists: If you create a table by using the name of an existing table and  the parameter set to false, an error is returned.
         *                    If you specify the if not exists parameter, a success message
         *                    is returned when you create a table by using the name of an
         *                    existing table. The success message is returned even if the
         *                    schema of the existing table is different from that of the table you want to create.
         *                    If you create a table by using the name of an existing table,
         *                    the table is not created and the metadata of the existing table is not changed.
         * @return {@code this}
         */
        public Builder ifNotExists(com.aliyun.ros.cdk.core.IResolvable ifNotExists) {
            this.ifNotExists = ifNotExists;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getLifecycle}
         * @param lifecycle Property lifecycle: Table's lifecycle.
         * @return {@code this}
         */
        public Builder lifecycle(java.lang.Number lifecycle) {
            this.lifecycle = lifecycle;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getLifecycle}
         * @param lifecycle Property lifecycle: Table's lifecycle.
         * @return {@code this}
         */
        public Builder lifecycle(com.aliyun.ros.cdk.core.IResolvable lifecycle) {
            this.lifecycle = lifecycle;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getSchema}
         * @param schema Property schema: Table schema.
         * @return {@code this}
         */
        public Builder schema(com.aliyun.ros.cdk.core.IResolvable schema) {
            this.schema = schema;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getSchema}
         * @param schema Property schema: Table schema.
         * @return {@code this}
         */
        public Builder schema(com.aliyun.ros.cdk.maxcompute.RosTable.SchemaProperty schema) {
            this.schema = schema;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getStringSchema}
         * @param stringSchema Property stringSchema: Create a table with field names and field type strings.
         *                     Example: 'num bigint, num2 double', 'pt string'
         * @return {@code this}
         */
        public Builder stringSchema(java.lang.String stringSchema) {
            this.stringSchema = stringSchema;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getStringSchema}
         * @param stringSchema Property stringSchema: Create a table with field names and field type strings.
         *                     Example: 'num bigint, num2 double', 'pt string'
         * @return {@code this}
         */
        public Builder stringSchema(com.aliyun.ros.cdk.core.IResolvable stringSchema) {
            this.stringSchema = stringSchema;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TableProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TableProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TableProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TableProps {
        private final java.lang.Object name;
        private final java.lang.Object project;
        private final java.lang.Object comment;
        private final java.lang.Object ifNotExists;
        private final java.lang.Object lifecycle;
        private final java.lang.Object schema;
        private final java.lang.Object stringSchema;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.comment = software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ifNotExists = software.amazon.jsii.Kernel.get(this, "ifNotExists", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lifecycle = software.amazon.jsii.Kernel.get(this, "lifecycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.schema = software.amazon.jsii.Kernel.get(this, "schema", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stringSchema = software.amazon.jsii.Kernel.get(this, "stringSchema", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.project = java.util.Objects.requireNonNull(builder.project, "project is required");
            this.comment = builder.comment;
            this.ifNotExists = builder.ifNotExists;
            this.lifecycle = builder.lifecycle;
            this.schema = builder.schema;
            this.stringSchema = builder.stringSchema;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getProject() {
            return this.project;
        }

        @Override
        public final java.lang.Object getComment() {
            return this.comment;
        }

        @Override
        public final java.lang.Object getIfNotExists() {
            return this.ifNotExists;
        }

        @Override
        public final java.lang.Object getLifecycle() {
            return this.lifecycle;
        }

        @Override
        public final java.lang.Object getSchema() {
            return this.schema;
        }

        @Override
        public final java.lang.Object getStringSchema() {
            return this.stringSchema;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            data.set("project", om.valueToTree(this.getProject()));
            if (this.getComment() != null) {
                data.set("comment", om.valueToTree(this.getComment()));
            }
            if (this.getIfNotExists() != null) {
                data.set("ifNotExists", om.valueToTree(this.getIfNotExists()));
            }
            if (this.getLifecycle() != null) {
                data.set("lifecycle", om.valueToTree(this.getLifecycle()));
            }
            if (this.getSchema() != null) {
                data.set("schema", om.valueToTree(this.getSchema()));
            }
            if (this.getStringSchema() != null) {
                data.set("stringSchema", om.valueToTree(this.getStringSchema()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-maxcompute.TableProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TableProps.Jsii$Proxy that = (TableProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (!project.equals(that.project)) return false;
            if (this.comment != null ? !this.comment.equals(that.comment) : that.comment != null) return false;
            if (this.ifNotExists != null ? !this.ifNotExists.equals(that.ifNotExists) : that.ifNotExists != null) return false;
            if (this.lifecycle != null ? !this.lifecycle.equals(that.lifecycle) : that.lifecycle != null) return false;
            if (this.schema != null ? !this.schema.equals(that.schema) : that.schema != null) return false;
            return this.stringSchema != null ? this.stringSchema.equals(that.stringSchema) : that.stringSchema == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.project.hashCode());
            result = 31 * result + (this.comment != null ? this.comment.hashCode() : 0);
            result = 31 * result + (this.ifNotExists != null ? this.ifNotExists.hashCode() : 0);
            result = 31 * result + (this.lifecycle != null ? this.lifecycle.hashCode() : 0);
            result = 31 * result + (this.schema != null ? this.schema.hashCode() : 0);
            result = 31 * result + (this.stringSchema != null ? this.stringSchema.hashCode() : 0);
            return result;
        }
    }
}
