<Menu.Target>
          <UnstyledButton
            className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
          >
            <Group spacing={7}>
              <Avatar src={'https://media-exp1.licdn.com/dms/image/D5616AQEk-SiPdqh6Bw/profile-displaybackgroundimage-shrink_350_1400/0/1665989036761?e=1674691200&v=beta&t=wmM4eiijZhh89j3DEv8toSHEFAwyQlkpv-UFn6WJukU'} alt={'rohan'} radius="xl" size={20} />
              <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                {user.name} 
              </Text>
              <IconChevronDown size={12} stroke={1.5} />
            </Group>
          </UnstyledButton>
        </Menu.Target>