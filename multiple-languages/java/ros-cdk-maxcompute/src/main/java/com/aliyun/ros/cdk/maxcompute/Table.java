package com.aliyun.ros.cdk.maxcompute;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MaxCompute::Table</code>, which is used to create a table.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:07.628Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.maxcompute.$Module.class, fqn = "@alicloud/ros-cdk-maxcompute.Table")
public class Table extends com.aliyun.ros.cdk.core.Resource {

    protected Table(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Table(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Table(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.maxcompute.TableProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Table(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.maxcompute.TableProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Name: Table name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Project: Project name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProject() {
        return software.amazon.jsii.Kernel.get(this, "attrProject", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.maxcompute.TableProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.maxcompute.TableProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.maxcompute.TableProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.maxcompute.Table}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.maxcompute.Table> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.maxcompute.TableProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.maxcompute.TableProps.Builder();
        }

        /**
         * Property name: Table name.
         * <p>
         * @return {@code this}
         * @param name Property name: Table name. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: Table name.
         * <p>
         * @return {@code this}
         * @param name Property name: Table name. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property project: Project name, if not provided, will be the default project.
         * <p>
         * @return {@code this}
         * @param project Property project: Project name, if not provided, will be the default project. This parameter is required.
         */
        public Builder project(final java.lang.String project) {
            this.props.project(project);
            return this;
        }
        /**
         * Property project: Project name, if not provided, will be the default project.
         * <p>
         * @return {@code this}
         * @param project Property project: Project name, if not provided, will be the default project. This parameter is required.
         */
        public Builder project(final com.aliyun.ros.cdk.core.IResolvable project) {
            this.props.project(project);
            return this;
        }

        /**
         * Property comment: Table comment.
         * <p>
         * @return {@code this}
         * @param comment Property comment: Table comment. This parameter is required.
         */
        public Builder comment(final java.lang.String comment) {
            this.props.comment(comment);
            return this;
        }
        /**
         * Property comment: Table comment.
         * <p>
         * @return {@code this}
         * @param comment Property comment: Table comment. This parameter is required.
         */
        public Builder comment(final com.aliyun.ros.cdk.core.IResolvable comment) {
            this.props.comment(comment);
            return this;
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
         * <p>
         * @return {@code this}
         * @param ifNotExists Property ifNotExists: If you create a table by using the name of an existing table and  the parameter set to false, an error is returned. This parameter is required.
         */
        public Builder ifNotExists(final java.lang.Boolean ifNotExists) {
            this.props.ifNotExists(ifNotExists);
            return this;
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
         * <p>
         * @return {@code this}
         * @param ifNotExists Property ifNotExists: If you create a table by using the name of an existing table and  the parameter set to false, an error is returned. This parameter is required.
         */
        public Builder ifNotExists(final com.aliyun.ros.cdk.core.IResolvable ifNotExists) {
            this.props.ifNotExists(ifNotExists);
            return this;
        }

        /**
         * Property lifecycle: Table's lifecycle.
         * <p>
         * @return {@code this}
         * @param lifecycle Property lifecycle: Table's lifecycle. This parameter is required.
         */
        public Builder lifecycle(final java.lang.Number lifecycle) {
            this.props.lifecycle(lifecycle);
            return this;
        }
        /**
         * Property lifecycle: Table's lifecycle.
         * <p>
         * @return {@code this}
         * @param lifecycle Property lifecycle: Table's lifecycle. This parameter is required.
         */
        public Builder lifecycle(final com.aliyun.ros.cdk.core.IResolvable lifecycle) {
            this.props.lifecycle(lifecycle);
            return this;
        }

        /**
         * Property schema: Table schema.
         * <p>
         * @return {@code this}
         * @param schema Property schema: Table schema. This parameter is required.
         */
        public Builder schema(final com.aliyun.ros.cdk.core.IResolvable schema) {
            this.props.schema(schema);
            return this;
        }
        /**
         * Property schema: Table schema.
         * <p>
         * @return {@code this}
         * @param schema Property schema: Table schema. This parameter is required.
         */
        public Builder schema(final com.aliyun.ros.cdk.maxcompute.RosTable.SchemaProperty schema) {
            this.props.schema(schema);
            return this;
        }

        /**
         * Property stringSchema: Create a table with field names and field type strings.
         * <p>
         * Example: 'num bigint, num2 double', 'pt string'
         * <p>
         * @return {@code this}
         * @param stringSchema Property stringSchema: Create a table with field names and field type strings. This parameter is required.
         */
        public Builder stringSchema(final java.lang.String stringSchema) {
            this.props.stringSchema(stringSchema);
            return this;
        }
        /**
         * Property stringSchema: Create a table with field names and field type strings.
         * <p>
         * Example: 'num bigint, num2 double', 'pt string'
         * <p>
         * @return {@code this}
         * @param stringSchema Property stringSchema: Create a table with field names and field type strings. This parameter is required.
         */
        public Builder stringSchema(final com.aliyun.ros.cdk.core.IResolvable stringSchema) {
            this.props.stringSchema(stringSchema);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.maxcompute.Table}.
         */
        @Override
        public com.aliyun.ros.cdk.maxcompute.Table build() {
            return new com.aliyun.ros.cdk.maxcompute.Table(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
