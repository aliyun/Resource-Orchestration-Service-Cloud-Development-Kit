package com.aliyun.ros.cdk.sls;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SLS::MachineGroup</code>, which is used to create a machine group.
 * <p>
 * Log Service manages all the ECS instances whose logs need to be collected using the Logtail client in the form of machine groups.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:12.336Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.MachineGroup")
public class MachineGroup extends com.aliyun.ros.cdk.core.Resource {

    protected MachineGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MachineGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public MachineGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.sls.MachineGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public MachineGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.sls.MachineGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public MachineGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute GroupName: GroupName of SLS.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ProjectName: ProjectName of SLS.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrProjectName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.MachineGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sls.MachineGroupProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.MachineGroupProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.MachineGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.MachineGroup> {
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
        private com.aliyun.ros.cdk.sls.MachineGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property groupAttribute: Group attribute, default is null.
         * <p>
         * The object value is groupToic and externalName
         * <p>
         * @return {@code this}
         * @param groupAttribute Property groupAttribute: Group attribute, default is null. This parameter is required.
         */
        public Builder groupAttribute(final java.lang.String groupAttribute) {
            this.props().groupAttribute(groupAttribute);
            return this;
        }
        /**
         * Property groupAttribute: Group attribute, default is null.
         * <p>
         * The object value is groupToic and externalName
         * <p>
         * @return {@code this}
         * @param groupAttribute Property groupAttribute: Group attribute, default is null. This parameter is required.
         */
        public Builder groupAttribute(final com.aliyun.ros.cdk.core.IResolvable groupAttribute) {
            this.props().groupAttribute(groupAttribute);
            return this;
        }

        /**
         * Property groupName: Display name of the group name, the Project only.
         * <p>
         * [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: Display name of the group name, the Project only. This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props().groupName(groupName);
            return this;
        }
        /**
         * Property groupName: Display name of the group name, the Project only.
         * <p>
         * [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: Display name of the group name, the Project only. This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props().groupName(groupName);
            return this;
        }

        /**
         * Property groupType: MachineGroup type, the value is empty or Armory.
         * <p>
         * @return {@code this}
         * @param groupType Property groupType: MachineGroup type, the value is empty or Armory. This parameter is required.
         */
        public Builder groupType(final java.lang.String groupType) {
            this.props().groupType(groupType);
            return this;
        }
        /**
         * Property groupType: MachineGroup type, the value is empty or Armory.
         * <p>
         * @return {@code this}
         * @param groupType Property groupType: MachineGroup type, the value is empty or Armory. This parameter is required.
         */
        public Builder groupType(final com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.props().groupType(groupType);
            return this;
        }

        /**
         * Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'.
         * <p>
         * @return {@code this}
         * @param machineIdentifyType Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'. This parameter is required.
         */
        public Builder machineIdentifyType(final java.lang.String machineIdentifyType) {
            this.props().machineIdentifyType(machineIdentifyType);
            return this;
        }
        /**
         * Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'.
         * <p>
         * @return {@code this}
         * @param machineIdentifyType Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'. This parameter is required.
         */
        public Builder machineIdentifyType(final com.aliyun.ros.cdk.core.IResolvable machineIdentifyType) {
            this.props().machineIdentifyType(machineIdentifyType);
            return this;
        }

        /**
         * Property machineList: The machine tag, the value is ip or userdefined-id.
         * <p>
         * @return {@code this}
         * @param machineList Property machineList: The machine tag, the value is ip or userdefined-id. This parameter is required.
         */
        public Builder machineList(final java.util.List<? extends java.lang.Object> machineList) {
            this.props().machineList(machineList);
            return this;
        }
        /**
         * Property machineList: The machine tag, the value is ip or userdefined-id.
         * <p>
         * @return {@code this}
         * @param machineList Property machineList: The machine tag, the value is ip or userdefined-id. This parameter is required.
         */
        public Builder machineList(final com.aliyun.ros.cdk.core.IResolvable machineList) {
            this.props().machineList(machineList);
            return this;
        }

        /**
         * Property projectName: MachineGroup created in project.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: MachineGroup created in project. This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props().projectName(projectName);
            return this;
        }
        /**
         * Property projectName: MachineGroup created in project.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: MachineGroup created in project. This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props().projectName(projectName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sls.MachineGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.MachineGroup build() {
            return new com.aliyun.ros.cdk.sls.MachineGroup(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.sls.MachineGroupProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.sls.MachineGroupProps.Builder();
            }
            return this.props;
        }
    }
}
